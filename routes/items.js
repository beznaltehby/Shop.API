'use strict';

import items from '../zoomos/items';

export default (app) => {
    app.get('/api/category/:id/items', (request, response) => {
        items.load(request.param('id')).then(items => response.send({items}), err => response.send({err}));
    });
};