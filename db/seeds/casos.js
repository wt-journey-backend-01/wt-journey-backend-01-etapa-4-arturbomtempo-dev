/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
    // Deletes ALL existing entries
    await knex('casos').del();
    await knex('casos').insert([
        {
            titulo: 'furto de veículo',
            descricao:
                'Um carro foi furtado na noite de 05/02/2021 no estacionamento de um supermercado no bairro Centro.',
            status: 'aberto',
            agente_id: 3,
        },
        {
            titulo: 'estelionato',
            descricao:
                'No dia 20/08/2020, uma vítima relatou ter sido enganada por um golpe de falso empréstimo via internet, perdendo R$ 5.000,00.',
            status: 'aberto',
            agente_id: 2,
        },
        {
            titulo: 'violência doméstica',
            descricao:
                'A polícia foi acionada após denúncia de agressão física entre familiares em uma residência na Vila Nova, resultando na prisão do agressor.',
            status: 'solucionado',
            agente_id: 1,
        },
    ]);
};
