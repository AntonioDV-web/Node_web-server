//const express = require('express')
import express from 'express'

import path from 'path'
//const path = require('path')

const startServer = (options) => {
    const {port, public_path = 'public'} = options
    
    const app = express()

    //para poder usar los middlewares se usa la palabra clave 'use' que viene de (express)
    app.use(express.static(public_path)) // contenido estatico que ponemos disponible.

    app.get('*', (req, res) => { // el primer parametro es para devolver siempre lo mismo, sin importar que se ponga en nuestro servidor.
        const indexPath = path.join(__dirname + `../../../${public_path}/index.html`) // para acceder a nuestro directorio __dirname, el resto es la ruta para acceder a la carpeta public.
        res.sendFile(indexPath) // aqui respondemos enviando el indexPath (index.html)
    })

    app.listen(port, () => { // para abrir un puerto y poder escuchar las peticiones a ese puerto.
        console.log(`Escuchando en el puerto: ${port}`);
        
    })
    

    
}

export {
    startServer
}
/* module.exports = {
    startServer
} */