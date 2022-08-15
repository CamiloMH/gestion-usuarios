const { GeneralError } = require('../utils/errors')

const handleErrors = (err, req, res, next) => {
	if (err instanceof GeneralError) {
		return res.status(err.getCode()).json({
			errors: typeof err.message === 'string' ? [err.message] : err.message,
		})
	}

	return res.status(500).json({
		errors: typeof err.message === 'string' ? [err.message] : err.message,
	})
}

module.exports = handleErrors
