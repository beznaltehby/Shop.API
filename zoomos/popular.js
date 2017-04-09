'use strict';

import apiUrls from './apiUrls';

function load () {
    const url = '/popular';

    return apiUrls.getRequest(url);
}

export default {
    load
};