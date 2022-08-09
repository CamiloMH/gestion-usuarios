'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
	class Movie extends Model {
		static associate(models) {
			// define association here
			Movie.belongsTo(models.Characters_movie, {
				foreignKey: 'idMovie',
				as: 'id',
			})
			Movie.belongsTo(models.Gender, {
				foreignKey: 'idGender',
				as: 'gender',
			})
			Movie.belongsTo(models.ContentType, {
				foreignKey: 'idContentType',
				as: 'contentType',
			})
		}
	}
	Movie.init(
		{
			image: DataTypes.STRING,
			title: DataTypes.STRING,
			qualification: DataTypes.INTEGER,
			idGender: DataTypes.INTEGER,
			idContentType: DataTypes.INTEGER,
		},
		{
			sequelize,
			modelName: 'Movie',
		}
	)
	return Movie
}
