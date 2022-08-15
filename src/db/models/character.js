'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
	class Character extends Model {
		static associate(models) {
			// define association here
			// Character.hasMany(models.Character_Movie, {
			// 	foreignKey: 'idCharacter',
			// 	as: 'character_movie',
			// })
		}
	}
	Character.init(
		{
			image: DataTypes.STRING,
			name: DataTypes.STRING,
			age: DataTypes.INTEGER,
			history: DataTypes.STRING,
		},
		{
			sequelize,
			modelName: 'Character',
		}
	)
	return Character
}
