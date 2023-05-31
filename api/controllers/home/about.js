module.exports = {


  friendlyName: 'About',


  description: 'About home.',


  inputs: {

  },


  exits: {

  },


  fn: async function (inputs) {

    return sails.inertia.render('about');

  }


};
