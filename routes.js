const express = require('express');
const router = express.Router();

const cardController = require('./controllers/cardController');
const trelloController = require('./controllers/trelloController');

router.all('/hooks', trelloController.newHook);
router.all('/lastReq', trelloController.lastReq);
router.use('/api/cards', cardController);

module.exports = router;
