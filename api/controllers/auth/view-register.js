module.exports = {


  friendlyName: 'View register',


  description: 'Display "Register" page.',


  exits: {

    success: {}

  },


  fn: async function () {

    return sails.inertia.render('register')

  }


};
