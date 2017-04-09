'use strict';

import Promise from 'promise';
import requestify from 'requestify';
import apiUrls from './apiUrls';

function load () {
    const url = '/categories';

    return new Promise((resolve, reject) => {
        requestify.request(apiUrls.getUrl(url), {
            method: 'GET'
        }).then((response) => resolve(JSON.parse(response.body)), (err) => reject(err));
    });
}

export default {
    load
};