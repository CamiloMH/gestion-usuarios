'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
	class ContentType extends Model {
		sociate(models) {
			// define association here
			ContentType.hasMany(models.Movie, {
				foreignKey: 'idContentType',
				as: 'movies',
			})
		}
	}
	ContentType.init(
		{
			descripcion: DataTypes.STRING,
		},
		{
			sequelize,
			modelName: 'ContentType',
		}
	)
	return ContentType
}
