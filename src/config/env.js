require('dotenv').config() // con esto las variables de entorno que creamos se seteen en nuestro objeto proces.
const { get } = require('env-var') // para poder darle propiedades a las variables de entorno, para que sean numericas, strings, etc..

const envs = {
    PORT: get('PORT').required().asPortNumber(),
    PUBLIC_PATH: get('PUBLIC_PATH').default('public').asString()
}

module.exports = {
    envs
}