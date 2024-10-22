import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient, Prisma } from '@prisma/client';

const prisma = new PrismaClient();

export async function GET() {
  try {
    console.log('Iniciando busca de vagas');
    console.log('URL do banco:', process.env.POSTGRES_PRISMA_URL);
    const vagas = await prisma.vaga.findMany();
    console.log('Vagas encontradas:', vagas.length);
    return NextResponse.json(vagas);
  } catch (error) {
    console.error('Erro detalhado ao buscar vagas:', error);
    return NextResponse.json({ error: 'Erro ao buscar vagas' }, { status: 500 });
  }
}