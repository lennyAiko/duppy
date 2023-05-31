module.exports = {


  friendlyName: 'Contact',


  description: 'Contact home.',


  inputs: {

  },


  exits: {

  },


  fn: async function (inputs) {

    return sails.inertia.render('contact');

  }


};
