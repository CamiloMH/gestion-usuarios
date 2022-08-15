const isActive = estado => {
	estado = estado?.toLowerCase() || null
	const ESTADO = {
		true: { enable: true },
		false: { enable: false },
	}
	return ESTADO[estado] || {}
}

module.exports = isActive
