'use strict';

import apiUrls from './apiUrls';

function load (categoryId) {
    const categoryUrl = '/category/' + categoryId + '/offers';
    const filtersUrl = '/category/' + categoryId + '/filters';

    return Promise.all([
        apiUrls.getRequest(categoryUrl),
        apiUrls.getRequest(filtersUrl)
    ]).then(results => {
        return {
            items: results[0],
            availableFilters: results[1]
        }
    });
}

export default {
    load
};