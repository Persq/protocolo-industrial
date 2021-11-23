const express = require('express');
const cors = require('cors');

class Server {

    constructor() {
        this.app  = express();
        this.port = 3000;
        this.industrialProtocolPath = '/api/industrialProtocol';

        // Middlewares
        this.middlewares();

        // Routes of my application
        this.routes();
    } 

    middlewares() {
        // CORS
        this.app.use( cors() );

        // Reading and parsing the body
        this.app.use( express.json() );

        // Public Directory
        // this.app.use( express.static('public') );
    }

    routes() {
        this.app.use( this.industrialProtocolPath, require('../routes/industrialProtocol'));
    }

    listen() {
        this.app.listen( this.port, () => {
            console.log('Servidor corriendo en puerto', this.port );
        });
    }

}




module.exports = Server;
