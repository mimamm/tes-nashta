const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('mata_kuliah', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    nama_mata_kuliah: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    nim: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'mahasiswa',
        key: 'nim'
      }
    }
  }, {
    sequelize,
    tableName: 'mata_kuliah',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "mata_kuliah_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
