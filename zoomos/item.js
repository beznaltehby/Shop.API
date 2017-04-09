'use strict';

import Promise from 'promise';
import apiUrls from './apiUrls';
import _ from 'lodash';

function load (itemId) {
    const itemUrl = '/item/' + itemId;
    const offerUrl = '/offer/' + itemId;

    return Promise.all([apiUrls.getRequest(itemUrl), apiUrls.getRequest(offerUrl)]).then(results => _.merge(...results));
}

export default {
    load
};