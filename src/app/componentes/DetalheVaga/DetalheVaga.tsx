'use client'
import React from 'react';
import Image from 'next/image';

interface DetalheVagaProps {
  titulo: string;
  localizacao: string;
  descricao: string;
  responsabilidades: string[];
  requisitos: string[];
  beneficios: string[];
  remuneracao: string;
}

export default function DetalheVaga({
  titulo,
  localizacao,
  descricao,
  responsabilidades,
  requisitos,
  beneficios,
  remuneracao
}: DetalheVagaProps) {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 text-blue-700">{titulo}</h1>
      
      <div className="flex items-center mb-4">
        <Image src="/icons/location.svg" alt="Localização" width={20} height={20} />
        <span className="ml-2 text-gray-600">{localizacao}</span>
      </div>

      <div className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-blue-800">Nosso jeito de ser e fazer</h2>
        <p className="text-gray-700">{descricao}</p>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-blue-800">Você terá entre suas responsabilidades:</h2>
        <ul className="list-disc pl-6">
          {responsabilidades.map((resp, index) => (
            <li key={index} className="text-gray-700 mb-2">{resp}</li>
          ))}
        </ul>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-blue-800">Você poderá agregar bastante ao nosso time se possuir:</h2>
        <ul className="list-disc pl-6">
          {requisitos.map((req, index) => (
            <li key={index} className="text-gray-700 mb-2">{req}</li>
          ))}
        </ul>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-blue-800">Aqui na empresa, os nossos Maxteres encontram:</h2>
        <ul className="list-disc pl-6">
          {beneficios.map((ben, index) => (
            <li key={index} className="text-gray-700 mb-2">{ben}</li>
          ))}
        </ul>
      </div>

      <div className="bg-blue-100 p-6 rounded-lg">
        <h2 className="text-2xl font-semibold mb-4 text-blue-800">Remuneração esperada como CLT:</h2>
        <p className="text-gray-700 text-xl">{remuneracao}</p>
      </div>

      <button className="mt-8 bg-blue-600 text-white font-bold py-2 px-4 rounded hover:bg-blue-700 transition duration-300">
        Candidatar para a vaga
      </button>
    </div>
  );
}