'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation'; // Importa o hook correto

const Page: React.FC = () => {
  const router = useRouter();

  useEffect(() => {
    router.push('/homepage'); // Substitua '/Home' pela rota correta
  }, [router]);

  return null;
};

export default Page;
