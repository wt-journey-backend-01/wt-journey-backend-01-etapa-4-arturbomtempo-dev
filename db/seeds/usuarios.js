/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
    // Deletes ALL existing entries
    await knex('usuarios').del();
    await knex('usuarios').insert([
        { nome: 'Carlos Silva', email: 'carlossilva@gmail.com', senha: '123456' },
        { nome: 'Beatriz Souza', email: 'beatrizsouza@gmail.com', senha: '654321' },
    ]);
};
