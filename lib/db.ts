import Database from 'better-sqlite3';

const db = new Database('./vagas.db');

export default db;