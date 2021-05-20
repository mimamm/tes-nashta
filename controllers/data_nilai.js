const model = require('../models/index')

module.exports = {
    createMethod: async function (req, res, next) {
        try {
            const {
                nim,
                id_mata_kuliah,
                id_dosen,
                nilai,
                keterangan
            } = req.body;
            const data_nilai = await model.data_nilai.create({
                nim,
                id_mata_kuliah,
                id_dosen,
                nilai,
                keterangan
            });
            if (data_nilai) {
                res.status(201).json({
                    'status': 'OK',
                    'messages': 'Nilai berhasil ditambahkan',
                    'data': data_nilai,
                })
            }
        } catch (err) {
            res.status(400).json({
                'status': 'ERROR',
                'messages': err.message,
                'data': {},
            })
        }
    },

    updateMethod: async function (req, res, next) {
        try {
            const {
                nim,
                id_mata_kuliah
            } = req.params;
            const {
                id_dosen,
                nilai,
                keterangan
            } = req.body;
            const data_nilai = await model.data_nilai.update({
                id_dosen,
                nilai,
                keterangan
            }, {
                where: {
                    nim: nim,
                    id_mata_kuliah: id_mata_kuliah
                }
            });
            if (nim & id_mata_kuliah) {
                res.json({
                    'status': 'OK',
                    'messages': 'Nilai berhasil diupdate',
                    'data': data_nilai,
                })
            }
        } catch (err) {
            res.status(400).json({
                'status': 'ERROR',
                'messages': err.message,
                'data': {},
            })
        }
    },

    deleteMethod: async function (req, res, next) {
        try {
            const {
                nim,
                id_mata_kuliah
            } = req.params;
            const data_nilai = await model.data_nilai.destroy({
                where: {
                    nim: nim,
                    id_mata_kuliah: id_mata_kuliah
                }
            })
            if (nim & id_mata_kuliah) {
                res.json({
                    'status': 'OK',
                    'messages': 'Nilai berhasil dihapus',
                    'data': data_nilai,
                })
            }
        } catch (err) {
            res.status(400).json({
                'status': 'ERROR',
                'messages': err.message,
                'data': {},
            })
        }
    },
}