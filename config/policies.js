/**
 * Policy Mappings
 * (sails.config.policies)
 *
 * Policies are simple functions which run **before** your actions.
 *
 * For more information on configuring policies, check out:
 * https://sailsjs.com/docs/concepts/policies
 */

module.exports.policies = {

  /***************************************************************************
  *                                                                          *
  * Default policy for all controllers and actions, unless overridden.       *
  * (`true` allows public access)                                            *
  *                                                                          *
  ***************************************************************************/

  // '*': true,

  // 'home/*': true,
  'dashboard/*': 'is-authenticated',
  'dashboard/update-endpoint': 'is-owner',
  'dashboard/delete-endpoint': 'is-owner',
  'dashboard/create-endpoint-data': 'is-owner',
  'dashboard/view-endpoint-data': 'is-owner',
  'dashboard/view-data': 'is-owner',
  'dashboard/update-data': 'is-owner',
  'dashboard/delete-data': 'is-owner',


};
