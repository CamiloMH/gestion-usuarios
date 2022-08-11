import validateSchemaLogin from '../dto/user/user-login.dto.js'
import validateSchemaRecoveryPassword from '../dto/user/user-recovery-password.dto.js'
import validateSchemaRegister from '../dto/user/user-register.dto.js'

export const validateSchemas = {
	register: validateSchemaRegister,
	login: validateSchemaLogin,
	recoveryPassword: validateSchemaRecoveryPassword,
}
