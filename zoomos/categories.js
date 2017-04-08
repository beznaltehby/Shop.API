'use strict';

import Promise from 'promise';
import requestify from 'requestify';

function load () {
    return new Promise((resolve, reject) => {
        requestify.request('http://api.export.zoomos.by/categories?key=api-help', {
            method: 'GET'
        }).then((response) => resolve(JSON.parse(response.body)), (err) => reject(err));
    });
}

export default {
    load
};