/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('images', {
    id: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    user_id: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false
    },
    album_id: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false
    },
    caption: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    ext: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    size: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false
    },
    mime: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    original_name: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    image_name: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    view_status: {
      type: DataTypes.INTEGER(1),
      allowNull: false
    },
    created_at: {
      type: DataTypes.DATE,
      allowNull: true
    },
    updated_at: {
      type: DataTypes.DATE,
      allowNull: true
    },
    deleted_at: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    tableName: 'images',
    timestamps:false
  });
};
