'use client';

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Loading from '../../componentes/Loading/Loading';
interface Vaga {    
  id: string
  titulo: string
  localizacao: string
  descricao: string
  responsabilidades: string 
  requisitos: string 
  beneficios: string 
  remuneracao: string
  area: string
}

const initialVaga: Vaga = {
  id: '',
  titulo: '',
  localizacao: '',
  descricao: '',
  responsabilidades: '',
  requisitos: '',
  beneficios: '',
  remuneracao: '',
  area: '',
};


export default function AdminPage() {
  const [vagas, setVagas] = useState<Vaga[]>([]);
  const [currentVaga, setCurrentVaga] = useState<Vaga>(initialVaga);
  const [isEditing, setIsEditing] = useState(false);
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    fetchVagas();
  }, []);

  const fetchVagas = async () => {
    setIsLoading(true)
    try {
      const response = await axios.get('/api/admin');
      setVagas(response.data);
    } catch (error) {
      console.error('Error fetching vagas:', error);
    } finally {
      setIsLoading(false)
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setCurrentVaga({ ...currentVaga, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      if (isEditing) {
        await axios.put('/api/admin', currentVaga);
      } else {
        await axios.post('/api/admin', currentVaga);
      }
      fetchVagas();
      setCurrentVaga(initialVaga);
      setIsEditing(false);
    } catch (error) {
      console.error('Error saving vaga:', error);
    }
  };

  const handleEdit = (vaga: Vaga) => {
    setCurrentVaga(vaga);
    setIsEditing(true);
  };

  const handleDelete = async (id: string) => {
    try {
      await axios.delete(`/api/admin?id=${id}`);
      fetchVagas();
    } catch (error) {
      console.error('Error deleting vaga:', error);
    }
  };

  return (
    <div>
      {isLoading ? (
        <Loading />
      ) : (
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-3xl font-bold mb-8">Admin - Gerenciar Vagas</h1>
          
          <form onSubmit={handleSubmit} className="mb-8 bg-white shadow-md rounded px-8 pt-6 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="titulo">
              Título
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="titulo"
              type="text"
              name="titulo"
              value={currentVaga.titulo}
              onChange={handleInputChange}
              required
            />
          </div>
          <div>
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="localizacao">
              Localização
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="localizacao"
              type="text"
              name="localizacao"
              value={currentVaga.localizacao}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="md:col-span-2">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="descricao">
              Descrição
            </label>
            <textarea
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="descricao"
              name="descricao"
              value={currentVaga.descricao}
              onChange={handleInputChange}
              required
              rows={4}
            ></textarea>
          </div>
          <div className="md:col-span-2">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="responsabilidades">
              Responsabilidades
            </label>
            <textarea
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="responsabilidades"
              name="responsabilidades"
              value={currentVaga.responsabilidades}
              onChange={handleInputChange}
              required
              rows={4}
            ></textarea>
          </div>
          <div className="md:col-span-2">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="requisitos">
              Requisitos
            </label>
            <textarea
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="requisitos"
              name="requisitos"
              value={currentVaga.requisitos}
              onChange={handleInputChange}
              required
              rows={4}
            ></textarea>
          </div>
          <div>
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="beneficios">
              Benefícios
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="beneficios"
              type="text"
              name="beneficios"
              value={currentVaga.beneficios}
              onChange={handleInputChange}
              required
            />
          </div>
          <div>
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="remuneracao">
              Remuneração
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="remuneracao"
              type="text"
              name="remuneracao"
              value={currentVaga.remuneracao}
              onChange={handleInputChange}
              required
            />
          </div>
          <div>
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="area">
              Área
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="area"
              type="text"
              name="area"
              value={currentVaga.area}
              onChange={handleInputChange}
              required
            />
          </div>
        </div>
        <div className="mt-6">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            {isEditing ? 'Atualizar Vaga' : 'Criar Vaga'}
          </button>
          {isEditing && (
            <button
              className="ml-4 bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              onClick={() => {
                setCurrentVaga(initialVaga);
                setIsEditing(false);
              }}
              type="button"
            >
              Cancelar Edição
            </button>
          )}
        </div>
      </form>

      <div className="overflow-x-auto">
        <table className="w-full bg-white shadow-md rounded">
          <thead>
            <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
              <th className="py-3 px-6 text-left">Título</th>
              <th className="py-3 px-6 text-left">Localização</th>
              <th className="py-3 px-6 text-left">Área</th>
              <th className="py-3 px-6 text-center">Ações</th>
            </tr>
          </thead>
          <tbody className="text-gray-600 text-sm font-light">
            {vagas.map((vaga) => (
              <tr key={vaga.id} className="border-b border-gray-200 hover:bg-gray-100">
                <td className="py-3 px-6 text-left whitespace-nowrap">{vaga.titulo}</td>
                <td className="py-3 px-6 text-left">{vaga.localizacao}</td>
                <td className="py-3 px-6 text-left">{vaga.area}</td>
                <td className="py-3 px-6 text-center">
                  <button
                    onClick={() => handleEdit(vaga)}
                    className="text-blue-500 hover:text-blue-700 mr-4"
                  >
                    Editar
                  </button>
                  <button
                    onClick={() => handleDelete(vaga.id)}
                    className="text-red-500 hover:text-red-700"
                  >
                    Excluir
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
        </div>
      )}
    </div>
  );
}