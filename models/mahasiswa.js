const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('mahasiswa', {
    nim: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    nama: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    alamat: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    tanggal_lahir: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    jurusan: {
      type: DataTypes.STRING(50),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'mahasiswa',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "mahasiswa_pkey",
        unique: true,
        fields: [
          { name: "nim" },
        ]
      },
    ]
  });
};
