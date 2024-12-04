'use client';

import { useState } from 'react';
import Link from 'next/link';

interface LoginValues {
  email: string;
  password: string;
}

const LoginForm: React.FC = () => {
  const [loginValues, setLoginValues] = useState<LoginValues>({
    email: '',
    password: '',
  });
  const [isChecked, setIsChecked] = useState(false);  // Estado para o checkbox
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { name, value } = e.target;
    setLoginValues((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsChecked(e.target.checked);  // Atualiza o estado do checkbox
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Validação básica
    if (!loginValues.email || !loginValues.password) {
      setError('Todos os campos são obrigatórios.');
      return;
    }

    if (!/\S+@\S+\.\S+/.test(loginValues.email)) {
      setError('Por favor, insira um e-mail válido.');
      return;
    }

    if (!isChecked) {  // Valida se o checkbox foi marcado
      setError('Você precisa aceitar os termos de responsabilidade.');
      return;
    }

    setError(null);
    setSuccess('Login realizado com sucesso!');
    console.log('Usuário logado:', loginValues);

    // Limpar os campos do formulário após o login
    setLoginValues({ email: '', password: '' });
  };

  return (
    <div className="flex items-center justify-center bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md bg-white p-5 rounded-lg shadow-md"
      >
        <h1 className='mb-5'>Não tem uma conta? <Link href="/signup" className='text-blue-500 border-gray-300 rounded focus:ring-2 focus:ring-blue-500'>Cadastrar-se</Link></h1>
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Login</h2>

        {error && (
          <div className="mb-4 text-red-500 text-sm font-medium">{error}</div>
        )}

        {success && (
          <div className="mb-4 text-green-500 text-sm font-medium">{success}</div>
        )}

        <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-gray-700 font-medium mb-1"
          >
            E-mail
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={loginValues.email}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Seu e-mail"
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="password"
            className="block text-gray-700 font-medium mb-1"
          >
            Senha
          </label>
          <input
            type="password"
            id="password"
            name="password"
            value={loginValues.password}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Sua senha"
          />
        </div>

        {/* Checkbox para aceitar os termos */}
        <div className="mb-4 flex items-center">
          <input
            type="checkbox"
            id="terms"
            checked={isChecked}
            onChange={handleCheckboxChange}
            className="h-4 w-4 text-blue-500 border-gray-300 rounded focus:ring-2 focus:ring-blue-500"
          />
          <label
            htmlFor="terms"
            className="ml-2 text-sm text-gray-700 my-5"
          >
            Eu aceito os{' '}
            <Link href="/terms" className="text-blue-500 hover:underline">
              Termos de Responsabilidade
            </Link>
          </label>
        </div>

        <button
          type="submit"
          className="w-full bg-blue-500 text-white font-medium py-2 rounded-lg hover:bg-blue-600 transition"
        >
          Entrar
        </button>
      </form>
    </div>
  );
};

export default LoginForm;
