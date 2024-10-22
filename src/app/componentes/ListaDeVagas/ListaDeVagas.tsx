'use client'
import React, { useState, useEffect } from 'react'
import TrabalheConosco from "./TrabalheConosco/TrabalheConosco"
import Loading from '../Loading/Loading'

interface Vaga {
  id: string
  titulo: string
  localizacao: string
  descricao: string
  responsabilidades: string []
  requisitos: string []
  beneficios: string []
  remuneracao: string
  area: string
}

export default function ListaDeVagas() {
  const [vagas, setVagas] = useState<Vaga[]>([])
  const [isLoading, setIsLoading] = useState(true)


  useEffect(() => {
    setIsLoading(true)

    fetch('/api/vagas')
      .then(response => response.json())
      .then(data => {
        setVagas(data)
        setIsLoading(false)
      })
      .catch(error => console.error('Erro ao buscar vagas:', error, setIsLoading(false)))
  }, [])

  return (
    <div>
      {isLoading ? (
        <Loading />
      ) : (
        <TrabalheConosco vagas={vagas} />
      )}
    </div>
  )
}