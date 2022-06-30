'use strict';

module.exports = {
  index(ctx) {
    ctx.body = strapi
      .plugin('website-manager')
      .service('customService')
      .getWelcomeMessage();
  },
};
