'use strict';

import nconf from 'nconf';

const zoomosApiUrl = 'http://api.export.zoomos.by';

function getApiKey () {
    return process.env.zoomosKey || nconf.get('zoomos:apiKey') || 'api-help';
}

function generateKeyParam () {
    return '?key=' + getApiKey();
}

function getUrl (url) {
    return zoomosApiUrl + url + generateKeyParam();
}

export default {
    getUrl
};