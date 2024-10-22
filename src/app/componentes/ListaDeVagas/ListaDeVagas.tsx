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
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setLoading(true)
    fetch('/api/vagas')
      .then(response => response.json())
      .then(data => {
        if (Array.isArray(data)) {
          setVagas(data)
        } else {
          console.error('Dados recebidos não são um array:', data)
          setVagas([])
        }
      })
      .catch(error => console.error('Erro ao buscar vagas:', error))
      .finally(() => setLoading(false))
  }, [])

  if (loading) {
    return <Loading />
  }

  return (
    <div>
     
          <TrabalheConosco vagas={vagas} />
       
       
    </div>
  )
}