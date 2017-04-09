'use strict';

import nconf from 'nconf';
import Promise from 'promise';
import requestify from 'requestify';

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

function getRequest (url) {
    let zoomosApiUrl = getUrl(url);

    return new Promise((resolve, reject) => {
        requestify.request(zoomosApiUrl, {
            method: 'GET'
        }).then((response) => resolve(JSON.parse(response.body)), (err) => reject(err));
    });
}

export default {
    getRequest
};