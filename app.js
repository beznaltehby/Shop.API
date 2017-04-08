"use strict";

import nconf from 'nconf';
import express from 'express';
import http from 'http';

nconf.argv().env().file({file: 'config.json'});

let app = express();

import boot from './boot/index';
boot(app);

import routes from './routes/index';
routes(app);

http.createServer(app).listen(app.get('port'), () => {
    if (app.get('env') === 'development') {
        console.log('Express server listening on port ' + app.get('port'));
    }
});