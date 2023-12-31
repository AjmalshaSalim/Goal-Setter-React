const express = require('express');
const router = express.Router();
const {protect} = require('../middleware/authMiddleware')
const {
    adminLogin,
    adminDashboard,
    removeUser,
  } = require('../controllers/adminController')

router.post('/',adminLogin)
router.get('/',protect,adminDashboard)
router.put('/',protect,removeUser)

module.exports = router