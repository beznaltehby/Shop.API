'use strict';

import apiUrls from './apiUrls';

function load (itemId) {
    const url = '/item/' + itemId;

    return apiUrls.getRequest(url);
}

export default {
    load
};