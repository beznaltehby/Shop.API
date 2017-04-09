'use strict';

import categories from '../zoomos/categories';

export default (app) => {
    app.get('/api/categories', (request, response) => {
        categories.load()
            .then(categories => response.send({categories}), err => response.send({err}));
    });
};