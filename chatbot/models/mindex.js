const mindex = function (Sequelize, DataTypes) {
  const model = Sequelize.define(
    "login",
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      userid: {
        type: DataTypes.STRING(20),
        allowNull: false,
      },

      pw: {
        type: DataTypes.STRING(20),
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING(20),
        allowNull: false,
      },
    },
    {
      tableName: "user",
      freezeTableName: true, // 테이블명 고정!
      timestamps: false, //
    }
  );
  return model;
};

module.exports = mindex;
