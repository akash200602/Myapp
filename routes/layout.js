const express = require('express');
const { saveLayout, loadLayout } = require('../controllers/LayoutController');
const { authenticate } = require('../middleware/auth'); // Middleware to authenticate user

const router = express.Router();

router.post('/layout', authenticate, saveLayout);
router.get('/layout', authenticate, loadLayout);

module.exports = router;