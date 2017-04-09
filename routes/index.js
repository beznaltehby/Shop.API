'use strict';

import categories from './categories';
import items from './items';
import item from './item';
import popular from './popular';

export default (app) => {
    categories(app);
    items(app);
    item(app);
    popular(app);
}