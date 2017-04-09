'use strict';

import apiUrls from './apiUrls';

function load (categoryId) {
    const url = '/category/' + categoryId + '/offers';

    return apiUrls.getRequest(url);
}

export default {
    load
};