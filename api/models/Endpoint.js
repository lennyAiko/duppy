/**
 * Endpoint.js
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

    user: {
      model: 'user'
    },

    fields: {
      type: 'json',
      isString: true
    },

    name: {
      type: 'string',
      maxLength: 30,
      required: true
    },

    data_store: {
      collection: 'store',
      via: 'endpoint'
    }
  },

};

