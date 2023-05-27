/**
 * User.js
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

    username: {
      type: 'string',
      maxLength: 30,
      unique: true,
      required: true
    },

    email: {
      type: 'string',
      isEmail: true,
      maxLength: 50,
      required: true
    },

    password: {
      type: 'string',
      required: true,
      protect: true,
    }

  },

  beforeCreate: async function (valueToSet, proceed) {
    sails.helpers.passwords
      .hashPassword(valueToSet.password)
      .exec((error, hashedPassword) => {
        if (error) {
          return proceed(err)
        }
        valueToSet.password = hashedPassword
        return proceed()
      })
  },

  customToJSON: function() {
    return _.omit(this, ['password'])
  }

};

