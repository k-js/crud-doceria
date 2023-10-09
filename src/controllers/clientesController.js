// src/controllers/clientesController.js

import Cliente from '../models/Cliente.js';

class ClientesController {
  async getAll(req, res) {
    try {
      const clientes = await Cliente.getAll();
      res.json(clientes);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Erro ao buscar clientes.' });
    }
  }

  async getById(req, res) {
    const { id } = req.params;
    try {
      const cliente = await Cliente.getById(id);
      if (!cliente) {
        res.status(404).json({ message: 'Cliente não encontrado.' });
      } else {
        res.json(cliente);
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Erro ao buscar cliente.' });
    }
  }

  async create(req, res) {
    const { nome, email, telefone } = req.body;
    try {
      const novoCliente = await Cliente.create(nome, email, telefone);
      res.status(201).json(novoCliente);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Erro ao adicionar cliente.' });
    }
  }

  async update(req, res) {
    const { id } = req.params;
    const { nome, email, telefone } = req.body;
    try {
      const clienteAtualizado = await Cliente.update(id, nome, email, telefone);
      if (!clienteAtualizado) {
        res.status(404).json({ message: 'Cliente não encontrado.' });
      } else {
        res.json(clienteAtualizado);
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Erro ao atualizar cliente.' });
    }
  }

  async delete(req, res) {
    const { id } = req.params;
    try {
      const clienteExcluido = await Cliente.delete(id);
      if (!clienteExcluido) {
        res.status(404).json({ message: 'Cliente não encontrado.' });
      } else {
        res.json({ message: 'Cliente removido com sucesso.' });
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Erro ao excluir cliente.' });
    }
  }
}

export default new ClientesController();
