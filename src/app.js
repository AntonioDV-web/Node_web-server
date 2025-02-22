//const { envs } = require('./config/env.js')
import { envs } from './config/env.js'

import { startServer } from './server/server.js'
//const { startServer } = require('./server/server.js')


const main = () => {
    startServer({
        port: envs.PORT,
        public_path: envs.PUBLIC_PATH
    })
    
}

// esta es una funcion auto imvocada para que se ejecute de forma asincronica
(async () => {
    main()
})()