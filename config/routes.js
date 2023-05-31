/**
 * Route Mappings
 * (sails.config.routes)
 *
 * Your routes tell Sails what to do each time it receives a request.
 *
 * For more information on configuring custom routes, check out:
 * http://sailsjs.com/anatomy/config/routes-js
 */

 module.exports.routes = {
  /***************************************************************************
   *                                                                          *
   * Custom routes here...                                                    *
   *                                                                          *
   * If a request to a URL doesn't match any of the custom routes above, it   *
   * is matched against Sails route blueprints. See `config/blueprints.js`    *
   * for configuration options and examples.                                  *
   *                                                                          *
   ***************************************************************************/
  'GET /': 'home/index',
  'GET /about': 'home/about',
  'GET /contact': 'home/contact',

  'GET /register': 'auth/view-register',
  'POST /register': 'auth/register',

  'GET /login': 'auth/view-login',
  'POST /login': 'auth/login',

  'GET /dashboard': 'dashboard/view-index',

  'POST /dashboard/create': 'dashboard/create-endpoint',
  'POST /dashboard/update': 'dashboard/update-endpoint',
  'POST /dashboard/delete': 'dashboard/delete-endpoint',
  
  'POST /dashboard/:endpoint/create': 'dashboard/create-endpoint-data',
  'POST /dashboard/:endpoint/data': 'dashboard/view-endpoint-data',
  'POST /dashboard/:endpoint/data/:id': 'dashboard/view-data',
  'POST /dashboard/:endpoint/data/:id': 'dashboard/update-data',
  'POST /dashboard/:endpoint/data/:id': 'dashboard/delete-data',
}
