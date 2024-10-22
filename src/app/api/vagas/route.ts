import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function GET() {
  try {
    const vagas = await prisma.vaga.findMany();
    return NextResponse.json(vagas);
  } catch (error) {
    return NextResponse.json({ error: 'Erro ao buscar vagas' }, { status: 500 });
  }
}

