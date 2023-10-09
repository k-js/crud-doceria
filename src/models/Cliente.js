// src/models/Cliente.js

import pool from '../../config/db.js';

class Cliente {
  async getAll() {
    try {
      const query = 'SELECT * FROM clientes';
      const { rows } = await pool.query(query);
      return rows;
    } catch (error) {
      throw error;
    }
  }

  async getById(id) {
    try {
      const query = 'SELECT * FROM clientes WHERE id = $1';
      const { rows } = await pool.query(query, [id]);
      return rows[0];
    } catch (error) {
      throw error;
    }
  }

  async create(nome, email, telefone) {
    try {
      const query = 'INSERT INTO clientes (nome, email, telefone) VALUES ($1, $2, $3) RETURNING *';
      const { rows } = await pool.query(query, [nome, email, telefone]);
      return rows[0];
    } catch (error) {
      throw error;
    }
  }

  async update(id, nome, email, telefone) {
    try {
      const query = 'UPDATE clientes SET nome = $1, email = $2, telefone = $3 WHERE id = $4 RETURNING *';
      const { rows } = await pool.query(query, [nome, email, telefone, id]);
      return rows[0];
    } catch (error) {
      throw error;
    }
  }

  async delete(id) {
    try {
      const query = 'DELETE FROM clientes WHERE id = $1 RETURNING *';
      const { rows } = await pool.query(query, [id]);
      return rows[0];
    } catch (error) {
      throw error;
    }
  }
}

export default new Cliente();
