//require('dotenv').config() // con esto las variables de entorno que creamos se seteen en nuestro objeto proces.
import env from 'dotenv'

import envvar from 'env-var'
//const { get } = require('env-var') // para poder darle propiedades a las variables de entorno, para que sean numericas, strings, etc..

env.config()

const envs = {
    PORT: envvar.get('PORT').required().asPortNumber(),
    PUBLIC_PATH: envvar.get('PUBLIC_PATH').default('public').asString()
}

export {
    envs
}

/* module.exports = {
    envs
} */