'use strict';

import search from '../zoomos/search';

export default (app) => {
    app.get('/api/search', (request, response) => {
        search.load(request.param('query'))
            .then(searchedItems => response.send({searchedItems}), err => response.send({err}));
    });
};