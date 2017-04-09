'use strict';

import Promise from 'promise';
import apiUrls from './apiUrls';
import _ from 'lodash';

function load (itemId) {
    const itemUrl = '/item/' + itemId;
    const offerUrl = '/offer/' + itemId;
    const similarUrl = '/offer/' + itemId + '/similar';

    return Promise.all([
        apiUrls.getRequest(itemUrl),
        apiUrls.getRequest(offerUrl),
        apiUrls.getRequest(similarUrl)
    ]).then(results => _.merge(results[0], results[1], {similar: results[2]}));
}

export default {
    load
};