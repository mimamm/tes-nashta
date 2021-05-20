const express = require('express')
const router = express.Router()
const dataNilaiController = require('../controllers/data_nilai')

//POST
router.post('/create', dataNilaiController.createMethod);
//UPDATE
router.put('/update/:nim/:id_mata_kuliah', dataNilaiController.updateMethod);
//DELETE
router.delete('/delete/:nim/:id_mata_kuliah', dataNilaiController.deleteMethod);
module.exports = router