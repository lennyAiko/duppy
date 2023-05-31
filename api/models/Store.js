/**
 * Route.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

    id: {
      type: 'string',
      unique: true,
      required: true
    },

    data: {
      type: 'json',
      isString: true
    },

    endpoint: {
      model: 'endpoint'
    }

  },

};

