'use strict';

/**
 * site-data service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::site-data.site-data');
