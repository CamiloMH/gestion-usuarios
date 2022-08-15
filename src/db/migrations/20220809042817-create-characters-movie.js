'use strict'
module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.createTable('CharactersMovies', {
			id: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: Sequelize.INTEGER,
			},
			idMovie: {
				type: Sequelize.INTEGER,
				onDelete: 'CASCADE',
				references: {
					model: 'Movies',
					key: 'id',
					as: 'idMovie',
				},
			},
			idCharacter: {
				type: Sequelize.INTEGER,
				onDelete: 'CASCADE',
				references: {
					model: 'Characters',
					key: 'id',
					as: 'idCharacter',
				},
			},
			createdAt: {
				allowNull: false,
				type: Sequelize.DATE,
				defaultValue: Sequelize.fn('now'),
			},
			updatedAt: {
				type: Sequelize.DATE,
			},
		})
	},
	async down(queryInterface, Sequelize) {
		await queryInterface.dropTable('CharactersMovies')
	},
}
