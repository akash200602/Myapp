const express = require('express');
const { sendOtp, verifyOtp } = require('../controllers/authController');

const router = express.Router();

router.post('/login', sendOtp);
router.post('/verify-otp', verifyOtp);

module.exports = router;