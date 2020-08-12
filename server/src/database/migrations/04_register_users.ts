import Knex from 'knex';

export async function up(knex: Knex) {
  return knex.schema.createTable('register_users', (table) => {
    table.increments('id').primary();
    table.string('name').notNullable();
    table.string('surname').notNullable();
    table.string('email').notNullable();
    table.string('password').notNullable();

    table.timestamp('created_at')
    .defaultTo(knex.raw('CURRENT_TIMESTAMP'))
    .notNullable();
  });
}

export async function down(knex: Knex) {
  return knex.schema.dropTable('register_users');
}

