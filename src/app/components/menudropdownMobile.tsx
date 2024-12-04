"use client";

import React, { useState } from "react";

interface DropdownProps {
  title: string; // Título do dropdown
  items: string[]; // Itens do menu
}

const Dropdown: React.FC<DropdownProps> = ({ title, items }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div className="relative inline-block text-left ml-1">
      {/* Botão do Dropdown */}
      <button
        onClick={toggleDropdown}
        className="inline-flex justify-center w-full px-2 py-2"
      >
        {title}
        <div className="grid gap-1">
        <div className="w-[25px] h-[5px] bg-black rounded-sm"></div>
        <div className="w-[25px] h-[5px] bg-black rounded-sm"></div>
        <div className="w-[25px] h-[5px] bg-black rounded-sm"></div>
        </div>
        {/* <svg
          className="w-5 h-5 ml-2 -mr-1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 011.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
            clipRule="evenodd"
          />
          
        </svg> */}
        
      </button>

      {/* Itens do Dropdown */}
      {isOpen && (
        <div className="absolute z-10 mt-2 w-screen h-screen origin-top-right bg-white border border-gray-200 divide-y divide-gray-100 rounded-md shadow-lg">
          {items.map((item, index) => (
            <button
              key={index}
              className="block w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-100"
              onClick={() => alert(`Você clicou em: ${item}`)}
            >
              {item}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
