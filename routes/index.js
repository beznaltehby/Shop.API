'use strict';

import categories from './categories';
import items from './items';

export default (app) => {
    categories(app);
    items(app);
}