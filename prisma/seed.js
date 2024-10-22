import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

async function main() {
  const vagaExemplo = await prisma.vaga.upsert({
    where: { id: '1' },
    update: {},
    create: {
      titulo: "Analista Financeiro - Controladoria",
      localizacao: "Híbrido • Porto Alegre, RS, BR",
      descricao: "O time da Appmax é feito por pessoas mão na massa...",
      responsabilidades: JSON.stringify([
        "Responsável pelo recebimento de NF: volume x data;",
        "Revisão e controle de Contratos;",
        "Acompanhamento de Contas a Pagar - fornecedores, DP e impostos;",
        "Atuação na Gestão de Fornecedores;"
      ]),
      requisitos: JSON.stringify([
        "Experiência na Área de Compras e/ou Contas a Pagar;",
        "Formação Superior em áreas relacionadas à Administração, Contábeis e correlatos;",
        "Conhecimento avançado no pacote Office; principalmente Excel;"
      ]),
      beneficios: JSON.stringify([
        "Todos os equipamentos e recursos necessários para realizar o trabalho em modelo híbrido ou remoto.",
        "Ajuda de custo para despesas de trabalho remoto.",
        "Flexfood: assim você não precisa escolher entre VR ou VA."
      ]),
      remuneracao: "R$ 0.000,00",
      area: "Financeiro"
    },
  })

  console.log({ vagaExemplo })
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })