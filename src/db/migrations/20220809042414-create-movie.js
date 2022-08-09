'use strict'
module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.createTable('Movies', {
			id: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: Sequelize.INTEGER,
			},
			image: {
				type: Sequelize.STRING,
				allowNull: false,
			},
			title: {
				type: Sequelize.STRING,
				allowNull: false,
			},
			qualification: {
				type: Sequelize.INTEGER,
			},
			idGender: {
				type: Sequelize.INTEGER,
				allowNull: false,
				references: {
					model: 'Genders',
					key: 'id',
				},
			},
			idContentType: {
				type: Sequelize.INTEGER,
				allowNull: false,
				references: {
					model: 'ContentTypes',
					key: 'id',
				},
			},
			createdAt: {
				allowNull: false,
				type: Sequelize.DATE,
			},
			updatedAt: {
				allowNull: false,
				type: Sequelize.DATE,
			},
		})
	},
	async down(queryInterface, Sequelize) {
		await queryInterface.dropTable('Movies')
	},
}
