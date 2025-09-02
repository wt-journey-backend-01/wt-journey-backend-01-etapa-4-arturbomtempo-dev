/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
    // Deletes ALL existing entries
    await knex('agentes').del();
    await knex('agentes').insert([
        {
            nome: 'Ana Silva',
            dataDeIncorporacao: '2005-03-22',
            cargo: 'delegado',
        },
        {
            nome: 'João Pereira',
            dataDeIncorporacao: '2000-01-05',
            cargo: 'inspetor',
        },
        {
            nome: 'Marcos Lima',
            dataDeIncorporacao: '2023-01-15',
            cargo: 'inspetor',
        },
    ]);
};
