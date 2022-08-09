'use strict'
import { Model } from 'sequelize'
module.exports = (sequelize, DataTypes) => {
	class Character extends Model {
		static associate(models) {
			// define association here
			Character.belongsTo(models.Character_Movie, {
				foreignKey: 'idCharacter',
				as: 'character_movie',
			})
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
