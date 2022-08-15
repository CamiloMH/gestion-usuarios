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
			modelName: 'Gender',
		}
	)
	return Gender
}
