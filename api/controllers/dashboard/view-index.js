module.exports = {


  friendlyName: 'View index',


  description: 'Display "Index" page.',


  exits: {

    success: {}

  },


  fn: async function () {

    return sails.hook.inertia('dashboard/index', {
      username
    })

  }


};
