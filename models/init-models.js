var DataTypes = require("sequelize").DataTypes;
var _data_nilai = require("./data_nilai");
var _dosen = require("./dosen");
var _mahasiswa = require("./mahasiswa");
var _mata_kuliah = require("./mata_kuliah");
var _user = require("./user");

function initModels(sequelize) {
  var data_nilai = _data_nilai(sequelize, DataTypes);
  var dosen = _dosen(sequelize, DataTypes);
  var mahasiswa = _mahasiswa(sequelize, DataTypes);
  var mata_kuliah = _mata_kuliah(sequelize, DataTypes);
  var user = _user(sequelize, DataTypes);

  data_nilai.belongsTo(dosen, { as: "id_dosen_dosen", foreignKey: "id_dosen"});
  dosen.hasMany(data_nilai, { as: "data_nilais", foreignKey: "id_dosen"});
  data_nilai.belongsTo(mahasiswa, { as: "nim_mahasiswa", foreignKey: "nim"});
  mahasiswa.hasMany(data_nilai, { as: "data_nilais", foreignKey: "nim"});
  mata_kuliah.belongsTo(mahasiswa, { as: "nim_mahasiswa", foreignKey: "nim"});
  mahasiswa.hasMany(mata_kuliah, { as: "mata_kuliahs", foreignKey: "nim"});
  data_nilai.belongsTo(mata_kuliah, { as: "id_mata_kuliah_mata_kuliah", foreignKey: "id_mata_kuliah"});
  mata_kuliah.hasMany(data_nilai, { as: "data_nilais", foreignKey: "id_mata_kuliah"});

  return {
    data_nilai,
    dosen,
    mahasiswa,
    mata_kuliah,
    user,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
