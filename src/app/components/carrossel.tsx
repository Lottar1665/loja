import Image from "next/image";
import React, { useState, useEffect } from "react";

interface CarouselProps {
  items: string[]; // URLs das imagens
  interval?: number; // Intervalo em milissegundos para troca automática
}

const Carousel: React.FC<CarouselProps> = ({ items, interval = 2500 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false); // Controla a pausa no auto-play

  // Avança para o próximo slide
  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === items.length - 1 ? 0 : prevIndex + 1));
  };

  // Volta para o slide anterior
  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? items.length - 1 : prevIndex - 1));
  };

  // Alterna os slides automaticamente
  useEffect(() => {
    if (isPaused) return;

    const timer = setInterval(() => {
      handleNext();
    }, interval);

    return () => clearInterval(timer); // Limpa o intervalo ao desmontar ou pausar
  }, [isPaused, currentIndex, interval]);

  return (
    <div
      className="relative w-full h-[304px] max-w-4xl p-5"
      onMouseEnter={() => setIsPaused(true)} // Pausa ao passar o mouse
      onMouseLeave={() => setIsPaused(false)} // Retoma ao sair com o mouse
    >
    
      
      <div className="overflow-hidden rounded-lg">
      <div>
        {/* Botões de navegação */}
      <div className="">
      <button
        onClick={handlePrev}
        className="absolute top-40 left-6 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full shadow-md hover:bg-gray-700"
      >
        {"<"}
      </button>
      
      <button
        onClick={handleNext}
        className="absolute top-40 right-6 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full shadow-md hover:bg-gray-700"
      >
        {">"}
      </button>
      </div>
    </div>
    {/* Imagem atual */}
        <Image
          src={items[currentIndex]}
          alt={`Slide ${currentIndex + 1}`}
          width={200}
          height={304}
          className="w-full h-64 md:h-72 object-cover transition-all duration-500"
        />
        
      </div>

      

      {/* Indicadores */}
      <div className="flex justify-center mt-4 space-x-2">
        {items.map((_, index) => (
          <div
            key={index}
            onClick={() => setCurrentIndex(index)} // Permite clicar no indicador para mudar
            className={`w-3 h-3 rounded-full cursor-pointer ${
              index === currentIndex ? "bg-gray-800" : "bg-gray-400"
            }`}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
