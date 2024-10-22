'use client'
import React from 'react';
import DetalheVaga from '../DetalheVaga';

export default function PaginaDetalheVaga({ params }: { params: { id: string } }) {
  // Simula a busca da vaga pelo ID
  const vagas = [
    {
      id: '1',
      titulo: "Analista Financeiro - Controladoria",
      localizacao: "Híbrido • Porto Alegre, RS, BR",
      descricao: "O time da Appmax é feito por pessoas mão na massa, que tem os valores de garra e colaboração em 1º lugar. Nos esforçamos todos os dias para que empreendedores digitais consigam vender mais, de uma maneira mais eficiente e mais fácil. Nos inspiramos nos nossos clientes, e estamos aqui para servi-los e fornecer ferramentas que irão potencializar e maximizar seus resultados. Se você também quer participar dessa jornada conosco, se inscreva e venha fazer parte!",
      responsabilidades: [
        "Responsável pelo recebimento de NF: volume x data;",
        "Revisão e controle de Contratos;",
        "Acompanhamento de Contas a Pagar - fornecedores, DP e impostos;",
        "Atuação na Gestão de Fornecedores;",
      ],
      requisitos: [
        "Experiência na Área de Compras e/ou Contas a Pagar;",
        "Formação Superior em áreas relacionadas à Administração, Contábeis e correlatos;",
        "Conhecimento avançado no pacote Office; principalmente Excel;",
      ],
      beneficios: [
        "Todos os equipamentos e recursos necessários para realizar o trabalho em modelo híbrido ou remoto.",
        "Ajuda de custo para despesas de trabalho remoto.",
        "Flexfood: assim você não precisa escolher entre VR ou VA.",
      ],
      remuneracao: "R$ 0.000,00"
    },
    // Adicione mais vagas aqui...
  ];

  const vagaDetalhes = vagas.find(vaga => vaga.id === params.id);

  if (!vagaDetalhes) {
    return <div>Vaga não encontrada</div>;
  }

  return <DetalheVaga {...vagaDetalhes} />;
}