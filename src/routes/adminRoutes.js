const express = require('express');

const router = express.Router();

const adminController = require('../controllers/adminController.js');

router.get('/', adminController.admin);
router.get('/create',adminController.create);
router.post('/create',adminController.create);
router.get('/edit/:id',adminController['/edit/:id']);
router.put('/edit/:id',adminController['/edit/:id']);
router.delete('/delete/:id',adminController['/delete/:id']);

module.exports = router;
