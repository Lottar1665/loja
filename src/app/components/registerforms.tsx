'use client';

import { useState } from 'react';
import Link from 'next/link';

interface FormValues {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}

const RegisterForm: React.FC = () => {
  const [formValues, setFormValues] = useState<FormValues>({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { name, value } = e.target;
    setFormValues((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Validação básica
    if (!formValues.name || !formValues.email || !formValues.password || !formValues.confirmPassword) {
      setError('Todos os campos são obrigatórios.');
      return;
    }

    if (!/\S+@\S+\.\S+/.test(formValues.email)) {
      setError('Por favor, insira um e-mail válido.');
      return;
    }

    if (formValues.password !== formValues.confirmPassword) {
      setError('As senhas não coincidem.');
      return;
    }

    setError(null);
    setSuccess('Cadastro realizado com sucesso!');
    console.log('Usuário cadastrado:', formValues);

    // Limpar os campos do formulário
    setFormValues({ name: '', email: '', password: '', confirmPassword: '' });
  };

  return (
    <div className="flex items-center justify-center bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md bg-white p-5 rounded-lg shadow-md"
      >
        <h1 className='mb-5'>Você já tem uma conta? <Link href="/signin" className='text-blue-500 border-gray-300 rounded focus:ring-2 focus:ring-blue-500'> Entrar </Link></h1>
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Cadastro de Usuário</h2>

        {error && (
          <div className="mb-4 text-red-500 text-sm font-medium">{error}</div>
        )}

        {success && (
          <div className="mb-4 text-green-500 text-sm font-medium">{success}</div>
        )}

        <div className="mb-4">
          <label
            htmlFor="name"
            className="block text-gray-700 font-medium mb-1"
          >
            Nome
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formValues.name}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Seu nome"
          />
        </div>

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
            value={formValues.email}
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
            value={formValues.password}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Sua senha"
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="confirmPassword"
            className="block text-gray-700 font-medium mb-1"
          >
            Confirmar Senha
          </label>
          <input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            value={formValues.confirmPassword}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Confirme sua senha"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-500 text-white font-medium py-2 rounded-lg hover:bg-blue-600 transition"
        >
          Cadastrar
        </button>
      </form>
    </div>
  );
};

export default RegisterForm;
