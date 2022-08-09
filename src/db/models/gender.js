'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
	class Gender extends Model {
		static associate(models) {
			// define association here
			Gender.hasMany(models.Movie, {
				foreignKey: 'idGender',
				as: 'movies',
			})
		}
	}
	Gender.init(
		{
			description: DataTypes.STRING,
		},
		{
			sequelize,
			modelName: 'Gender',
		}
	)
	return Gender
}
