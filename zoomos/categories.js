'use strict';

import apiUrls from './apiUrls';

function load () {
    const url = '/categories';

    return apiUrls.getRequest(url);
}

export default {
    load
};