module.exports = {


  friendlyName: 'View endpoint routes',


  description: 'Display "Endpoint routes" page.',


  exits: {

    success: {
      viewTemplatePath: 'pages/dashboard/endpoint-routes'
    }

  },


  fn: async function () {

    // Respond with view.
    return {};

  }


};
