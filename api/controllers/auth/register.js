import uuid4 from "uuid4"

module.exports = {


  friendlyName: 'Register',


  description: 'Register auth.',


  inputs: {

    username: {
      type: 'string',
      required: true
    },
    emailAddress: {
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
    invalidField: {
      responseType: 'redirect'
    }

  },


  fn: async function (inputs) {

    const user = await User.findOne({ username: inputs.username })
    if (user) {
      return '/login'
    }

    await User.create({
      id: uuid4(),
      username: inputs.username.toLowerCase(),
      email: inputs.emailAddress.toLowerCase(),
      password: inputs.password
    })

    return '/login'

  }


};
