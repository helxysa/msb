import { PrismaClient } from '@prisma/client'
import { NextResponse } from 'next/server'

const prisma = new PrismaClient()

export async function GET() {
  try {
    const vagas = await prisma.vaga.findMany()
    return NextResponse.json(vagas)
  } catch (error) {
    console.error('Erro ao buscar vagas:', error)
    return NextResponse.json({ error: 'Erro interno do servidor' }, { status: 500 })
  } finally {
    await prisma.$disconnect()
  }
}