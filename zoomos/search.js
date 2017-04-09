'use strict';

import apiUrls from './apiUrls';

function load (query) {
    const url = '/offers/search?q=' + query + '&';

    return apiUrls.getRequest(url);
}

export default {
    load
};