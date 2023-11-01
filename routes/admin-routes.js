const express = require('express');

const { loginView, dashbordView, outputView, viewView } = require('../controllers/admincontroller');
const router = express.Router();


router.get('/', loginView);
router.get('/dashbord', dashbordView);
router.get('/output', outputView);
router.get('/view', viewView);

module.exports = {
    router: router
}