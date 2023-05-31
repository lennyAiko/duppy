/**
 * Endpoint.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

    user: {
      model: 'user'
    },

    routes: {
      type: 'json',
      isString: true
    },

    name: {
      type: 'string',
      maxLength: 30,
      required: true
    }
  },

};

