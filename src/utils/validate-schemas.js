const validateSchemaLogin = require('../dto/auth/auth-login.dto.js')
const validateSchemaRecoveryPassword = require('../dto/auth/auth-recovery-password.dto.js')
const validateSchemaRegister = require('../dto/auth/auth-register.dto.js')
const validateSchemaUserPassword = require('../dto/user/user-password.dto.js')
const validateSchemaUserEnableDTO = require('../dto/user/user-status.dto.js')
const validateSchemaUserUpdate = require('../dto/user/user-update.dto.js')

const validateSchemas = {
	register: validateSchemaRegister,
	login: validateSchemaLogin,
	recoveryPassword: validateSchemaRecoveryPassword,
	userUpdate: validateSchemaUserUpdate,
	userPassword: validateSchemaUserPassword,
	userEnable: validateSchemaUserEnableDTO,
}

module.exports = { validateSchemas }
