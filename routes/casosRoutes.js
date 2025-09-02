const express = require('express');
const router = express.Router();
const casosController = require('../controllers/casosController');
const {
    newCasoValidation,
    updateCasoValidation,
    partialUpdateCasoValidation,
} = require('../utils/casosValidations');

router.get('/search', casosController.filter);
router.get('/:caso_id/agente', casosController.getAgenteByCasoId);
router.get('/:id', casosController.getCasosById);
router.get('/', casosController.getAllCasos);
router.post('/', newCasoValidation, casosController.createCaso);
router.put('/:id', updateCasoValidation, casosController.updateCaso);
router.patch('/:id', partialUpdateCasoValidation, casosController.updatePartialCaso);
router.delete('/:id', casosController.deleteCaso);

module.exports = router;
