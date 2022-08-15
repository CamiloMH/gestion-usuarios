'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
	class CharactersMovie extends Model {
		static associate(models) {
			// define association here
			CharactersMovie.belongsTo(models.Movie, {
				foreignKey: 'idMovie',
				as: 'movie',
			})
			CharactersMovie.belongsTo(models.Character, {
				foreignKey: 'idCharacter',
				as: 'character',
			})
		}
	}
	CharactersMovie.init(
		{
			idMovie: DataTypes.INTEGER,
			idCharacter: DataTypes.INTEGER,
			createdAt: {
				type: DataTypes.DATE,
				get() {
					return this.getDataValue('createdAt').getTime()
				},
			},
			updatedAt: {
				type: DataTypes.DATE,
				get() {
					return this.getDataValue('updatedAt')?.getTime() || null
				},
			},
		},
		{
			sequelize,
			modelName: 'CharactersMovie',
		}
	)
	return CharactersMovie
}
