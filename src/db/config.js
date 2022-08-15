require('dotenv').config()
const {
	DB_HOST,
	DB_PORT,
	DB_USER,
	DB_PASS,
	DB_NAME,
	DB_DIALECT,
	DB_NAME_TEST,
} = process.env

module.exports = {
	development: {
		username: DB_USER,
		password: DB_PASS,
		database: DB_NAME,
		host: DB_HOST,
		port: DB_PORT,
		dialect: DB_DIALECT,
		logging: false,
		define: {
			timestamps: false,
		},
		dialectOptions: {
			bigNumberStrings: true,
		},
	},
	test: {
		username: DB_USER,
		password: DB_PASS,
		database: DB_NAME_TEST,
		host: DB_HOST,
		port: DB_PORT,
		dialect: DB_DIALECT,
		define: {
			timestamps: false,
		},
		dialectOptions: {
			bigNumberStrings: true,
		},
	},
	production: {
		username: DB_USER,
		password: DB_PASS,
		database: DB_NAME,
		host: DB_HOST,
		port: DB_PORT,
		dialect: DB_DIALECT,
		dialectOptions: {
			bigNumberStrings: true,
		},
	},
}
