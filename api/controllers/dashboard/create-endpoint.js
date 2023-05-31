module.exports = {


  friendlyName: 'Create endpoint',


  description: '',


  inputs: {

    name: {
      type: 'string',
      required: true
    }

  },


  exits: {

  },


  fn: async function ({name}) {

    const { id } = this.req.session.userId
    const user = await User.findOne({ id: id })

    await Endpoint.create({
      user: user.id,
      name: name
    })
    
    return '/dashboard'

  }


};
