'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
	class Characters_Movie extends Model {
		static associate(models) {
			// define association here
			Characters_Movie.belongsTo(models.Movie, {
				foreignKey: 'idMovie',
				as: 'movie',
			})
			Characters_Movie.belongsTo(models.Character, {
				foreignKey: 'idCharacter',
				as: 'character',
			})
		}
	}
	Characters_Movie.init(
		{
			idMovie: DataTypes.INTEGER,
			idCharacter: DataTypes.INTEGER,
		},
		{
			sequelize,
			modelName: 'Characters_Movie',
		}
	)
	return Characters_Movie
}
