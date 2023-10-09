// src/routes/clientes.js

import express from 'express';
import ClientesController from '../controllers/clientesController.js'
const router = express.Router();

router.get('/', ClientesController.getAll);
router.get('/:id', ClientesController.getById);
router.post('/', ClientesController.create);
router.put('/:id', ClientesController.update);
router.delete('/:id', ClientesController.delete);

export default router;
