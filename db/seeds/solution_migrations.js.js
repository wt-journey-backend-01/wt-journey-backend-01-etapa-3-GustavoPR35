/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  await knex('casos').del()
  await knex('agentes').del()

  await knex('agentes').insert([
    { nome: "Gustavo Rodrigues", dataDeIncorporacao: "2024-08-01", cargo: "Inspetor" },
    { nome: "Tatiane Ribeiro", dataDeIncorporacao: "2022-03-19", cargo: "Delegado" }
  ]);
  
  await knex('casos').insert([
    { 
      titulo: "Vandalismo", 
      descricao: "Durante a madrugada de 21/11/2024, diversas paredes de um prédio público foram pichadas e vidros foram quebrados.",
      status: "solucionado",
      agente_id: 1
    },
    {
      titulo: "Homicídio", 
      descricao: "Disparos foram reportados às 22:33 do dia 10/07/2021 na região do bairro União, resultando na morte da vítima, um homem de 45 anos.",
      status: "aberto",
      agente_id: 2
    }
  ]);
};
