require('dotenv').config();

import 'reflect-metadata';
import { DataSource } from 'typeorm';

export const AppDataSource = new DataSource({
  type: 'postgres',
  host: process.env.POSTGRES_HOST,
  port: Number(process.env.POSTGRES_PORT),
  username: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD,
  database: process.env.POSTGRES_DB,
  synchronize: false,
  logging: false,
  entities: ['src/entity/**/*.entity{.ts,.js}'],
  migrations: ['src/migration/**/*{.ts,.js}'],
  subscribers: [],
  migrationsTableName: 'orm_migrations',
});
