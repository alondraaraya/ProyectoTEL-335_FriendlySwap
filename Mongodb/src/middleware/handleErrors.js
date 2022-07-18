const ERROR_HANDLERS = {
    CastError: res =>
        res.status(400).send({ error: 'El id no corresponde a uno valido' }),

    ValidationError: (res, { message }) =>
        res.status(409).send({ error: message }),

    JsonWebTokenError: (res) =>
        res.status(401).json({ error: 'token vacio o no valido' }),

    TokenExpirerError: res =>
        res.status(401).json({ error: 'token expirado' }),

    defaultError: (res, error) => {
        console.error(error.name)
        res.status(500).end()
    }
}

module.exports = (error, req, res, next) => {
    const handler =
        ERROR_HANDLERS[error.name] || ERROR_HANDLERS.defaultError

    handler(res, error)
}