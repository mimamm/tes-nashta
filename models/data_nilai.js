const Sequelize = require('sequelize');
module.exports = function (sequelize, DataTypes) {
    return sequelize.define('data_nilai', {
        nim: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            references: {
                model: 'mahasiswa',
                key: 'nim'
            }
        },
        id_mata_kuliah: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            references: {
                model: 'mata_kuliah',
                key: 'id'
            }
        },
        id_dosen: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'dosen',
                key: 'id'
            }
        },
        nilai: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        keterangan: {
            type: DataTypes.STRING(50),
            allowNull: true
        }
    }, {
        sequelize,
        tableName: 'data_nilai',
        schema: 'public',
        timestamps: false
    });
};
