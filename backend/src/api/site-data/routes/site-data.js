'use strict';

/**
 * site-data router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::site-data.site-data');
