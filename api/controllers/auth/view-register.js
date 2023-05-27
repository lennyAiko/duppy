module.exports = {


  friendlyName: 'View register',


  description: 'Display "Register" page.',


  exits: {

    success: {
      viewTemplatePath: 'pages/auth/register'
    }

  },


  fn: async function () {

    // Respond with view.
    return {};

  }


};
