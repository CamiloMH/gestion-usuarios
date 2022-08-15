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
			modelName: 'ContentType',
		}
	)
	return ContentType
}
