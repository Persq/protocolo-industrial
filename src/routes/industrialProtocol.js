 
const { Router } = require('express');
const { check } = require('express-validator');
const { validarCampos } = require('../middlewares/validar-campos');

const { 
    industrialProtocolPost, 
    } = require('../controllers/industrialProtocol');

const router = Router();

router.post('/',[
    check('tuplas', 'The parameter is required').not().isEmpty(),
    check('tuplas.*.start','The parameter must be numeric').isNumeric(),
    check('tuplas.*.length','The parameter must be numeric').isNumeric(),
    check('tuplas.*.start', 'Rating must be a number between 0 and 4095').isInt({ min: 0, max: 4095 }),
    check('tuplas.*.length', 'Rating must be a number between 1 and 10').isInt({ min: 1, max: 10 }),
    check('tuplas.*.callback', 'The parameter is required').not().isEmpty(),
    validarCampos
], industrialProtocolPost );

module.exports = router;