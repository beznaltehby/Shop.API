'use strict';

import item from '../zoomos/item';

export default (app) => {
    app.get('/api/item/:id', (request, response) => {
        item.load(request.param('id')).then(item => response.send({item}), err => response.send({err}));
    });
};