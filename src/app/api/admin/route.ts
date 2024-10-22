import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient, Prisma } from '@prisma/client';

const prisma = new PrismaClient();

export async function GET() {
  try {
    const vagas = await prisma.vaga.findMany();
    return NextResponse.json(vagas);
  } catch (error) {
    return NextResponse.json({ error: 'Erro ao buscar vagas' }, { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  try {
    const data = await request.json();
    const novaVaga = await prisma.vaga.create({
      data: {
        titulo: data.titulo,
        localizacao: data.localizacao,
        descricao: data.descricao,
        responsabilidades: data.responsabilidades,
        requisitos: data.requisitos,
        beneficios: data.beneficios,
        remuneracao: data.remuneracao,
        area: data.area,
      },
    });
    return NextResponse.json(novaVaga, { status: 201 });
  } catch (error) {
    console.error('Erro ao criar vaga:', error);
    return NextResponse.json({ error: 'Erro ao criar vaga' }, { status: 500 });
  }
}

export async function PUT(request: NextRequest) {
  try {
    const data = await request.json();
    const vagaAtualizada = await prisma.vaga.update({
      where: { id: data.id },
      data: {
        titulo: data.titulo,
        localizacao: data.localizacao,
        descricao: data.descricao,
        responsabilidades: data.responsabilidades,
        requisitos: data.requisitos,
        beneficios: data.beneficios,
        remuneracao: data.remuneracao,
        area: data.area,
      },
    });
    return NextResponse.json(vagaAtualizada);
  } catch (error) {
    return NextResponse.json({ error: 'Erro ao atualizar vaga' }, { status: 500 });
  }
}

export async function DELETE(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');
    
    if (!id) {
      return NextResponse.json({ error: 'ID não fornecido' }, { status: 400 });
    }

    console.log('ID recebido:', id);

    const deletedVaga = await prisma.vaga.delete({
      where: { id: id },
    });

    console.log('Vaga excluída:', deletedVaga);

    return NextResponse.json({ message: 'Vaga excluída com sucesso', deletedVaga });
  } catch (error) {
    console.error('Erro detalhado ao excluir vaga:', error);
    if (error instanceof Prisma.PrismaClientKnownRequestError) {
      if (error.code === 'P2025') {
        return NextResponse.json({ error: 'Vaga não encontrada' }, { status: 404 });
      }
    }
    return NextResponse.json({ error: 'Erro ao excluir vaga' }, { status: 500 });
  }
}