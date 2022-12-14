'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
	class User extends Model {
		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */
		static associate(models) {
			// define association here
		}
	}
	User.init(
		{
			username: DataTypes.STRING,
			password: DataTypes.STRING,
			nombre: DataTypes.STRING,
			email: DataTypes.STRING,
			enable: DataTypes.BOOLEAN,
			role: DataTypes.STRING,
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
			modelName: 'User',
		}
	)
	return User
}
