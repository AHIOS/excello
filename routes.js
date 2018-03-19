const express = require('express');
const router = express.Router();

const cardController = require('./controllers/cardController');
const trelloController = require('./controllers/trelloController');

router.all('/hooks', trelloController.newHook);
router.all('/lastReq', trelloController.lastReq);
router.get('/api/cards', cardController.handleGet);
router.post('/api/cards', cardController.handlePost);

module.exports = router;
