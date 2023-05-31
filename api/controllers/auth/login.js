module.exports = {


  friendlyName: 'Login',


  description: 'Login auth.',


  inputs: {

    username: {
      type: 'string',
      required: true
    },

    password: {
      type: 'string',
      required: true
    }

  },


  exits: {

    success: {
      responseType: 'redirect'
    },
    badCombo: {
      statusCode: 400,
      responseType: 'redirect'
    }

  },


  fn: async function (inputs) {

    const credentialErrorMessage = 'These credentials do not match our records'

    // check for user in the DB
    var user = await User.findOne({ username: inputs.username.toLowerCase()})

    // if credentials does not match
    if (!user) {
      sails.hooks.inertia.share('errors', {
        email: credentialErrorMessage
      })
      throw { badCombo: '/register' }
    }

    // if password does not match
    await sails.helpers.passwords
      .checkPassword(inputs.password, user.password)
      .intercept('incorrect', (error) => {
        sails.log(error)
        sails.hooks.inertia.share('errors', {
          password: credentialErrorMessage
        })
        return { badCombo: 'back' }
      })
    
    // modify session instance
    this.req.session.userId = user.id
    return '/dashboard'
  }


};
