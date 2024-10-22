import { PrismaClient } from '@prisma/client'
import { NextResponse } from 'next/server'

const prisma = new PrismaClient({
  log: ['query', 'info', 'warn', 'error'],
})

export async function GET() {
  console.log('Iniciando requisição GET /api/vagas')
  try {
    console.log('Tentando conectar ao banco de dados...')
    await prisma.$connect()
    console.log('Conexão bem-sucedida. Buscando vagas...')
    const vagas = await prisma.vaga.findMany()
    console.log(`${vagas.length} vagas encontradas`)
    return NextResponse.json(vagas)
  } catch (error) {
    console.error('Erro detalhado ao buscar vagas:', error)
    return NextResponse.json({ error: 'Erro interno do servidor', details: error.message }, { status: 500 })
  } finally {
    await prisma.$disconnect()
    console.log('Desconectado do banco de dados')
  }
}