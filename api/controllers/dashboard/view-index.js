module.exports = {


  friendlyName: 'View index',


  description: 'Display "Index" page.',


  exits: {

    success: {}

  },


  fn: async function () {

    const userId = this.req.session.userId

    const payload = await User.findOne({ id: userId })

    return sails.inertia.render('dashboard/dashboard', {
      user: payload
    })

  }


};
