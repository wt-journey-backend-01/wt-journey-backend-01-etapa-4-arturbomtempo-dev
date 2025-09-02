const express = require('express');
const router = express.Router();
const agentesController = require('../controllers/agentesController');
const {
    newAgenteValidation,
    updateAgenteValidation,
    partialUpdateAgenteValidation,
} = require('../utils/agentesValidations');

router.get('/:id/casos', agentesController.getCasosByAgenteId);
router.get('/:id', agentesController.getAgenteById);
router.get('/', agentesController.getAllAgentes);
router.post('/', newAgenteValidation, agentesController.createAgente);
router.put('/:id', updateAgenteValidation, agentesController.updateAgente);
router.patch('/:id', partialUpdateAgenteValidation, agentesController.updatePartialAgente);
router.delete('/:id', agentesController.deleteAgente);

module.exports = router;
