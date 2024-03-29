import dotenv from 'dotenv';
import type { Knex } from 'knex';

dotenv.config();

// Update with your config settings.

const defaultConfig: Knex.Config = {
  client: 'postgresql',
  connection: {
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    ssl: process.env.USE_SSL,
  },
  pool: {
    min: 2,
    max: 10,
  },
  migrations: {
    tableName: 'knex_migrations',
  },
};

const config: { [key: string]: Knex.Config } = {
  development: defaultConfig,
  staging: defaultConfig,
  production: defaultConfig,
};

export default config;
