const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('dosen', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    nama: {
      type: DataTypes.STRING(50),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'dosen',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "dosen_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
