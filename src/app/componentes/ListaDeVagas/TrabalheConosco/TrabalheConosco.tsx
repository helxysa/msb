'use client'
import React, { useState } from 'react';
import Link from 'next/link';

interface Vaga {
  id: string;
  titulo: string;
  localizacao: string;
  descricao: string;
  responsabilidades: string[];
  requisitos: string[];
  beneficios: string[];
  remuneracao: string;
  area: string;
}

export default function TrabalheConosco({ vagas }: { vagas: Vaga[] }) {
  const [filtroArea, setFiltroArea] = useState('');
  const vagasFiltradas = filtroArea
    ? vagas.filter(vaga => vaga.area.toLowerCase() === filtroArea.toLowerCase())
    : vagas;

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 text-center text-blue-700">Trabalhe Conosco</h1>
      
      <div className="mb-6">
        <label htmlFor="filtroArea" className="block mb-2 text-sm font-medium text-blue-600">
          Filtrar por área:
        </label>
        <select
          id="filtroArea"
          value={filtroArea}
          onChange={(e) => setFiltroArea(e.target.value)}
          className="bg-blue-50 border border-blue-300 text-blue-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
        >
          <option value="">Todas as áreas</option>
          <option value="Tecnologia">Tecnologia</option>
          <option value="Marketing">Marketing</option>
          <option value="Design">Design</option>
          <option value="Finanças">Finanças</option>
        </select>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {vagasFiltradas.map((vaga) => (
          <div key={vaga.id} className="bg-blue-100 shadow-md rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-2 text-blue-800">{vaga.titulo}</h2>
            <p className="text-blue-600 mb-4">Área: {vaga.area}</p>
            <Link 
              href={`/componentes/ListaDeVagas/DetalhesVaga/${vaga.id}`}
              className="text-blue-400 hover:text-blue-500 font-medium"
            >
              Ver detalhes
            </Link>
          </div>
        ))}
      </div>

      {vagasFiltradas.length === 0 && (
        <p className="text-center text-blue-500 mt-6">
          Nenhuma vaga encontrada para a área selecionada.
        </p>
      )}
    </div>
  );
}