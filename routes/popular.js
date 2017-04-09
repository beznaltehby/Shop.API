'use strict';

import popular from '../zoomos/popular';

export default (app) => {
    app.get('/api/popular', (request, response) => {
        popular.load()
            .then(popularItems => response.send({popularItems}), err => response.send({err}));
    });
};