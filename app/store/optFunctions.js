/*
 * File: app/store/optFunctions.js
 *
 * This file was generated by Sencha Architect version 3.0.4.
 * http://www.sencha.com/products/architect/
 *
 * This file requires use of the Sencha Touch 2.3.x library, under independent license.
 * License of Sencha Architect does not include license for Sencha Touch 2.3.x. For more
 * details see http://www.sencha.com/license or contact license@sencha.com.
 *
 * This file will be auto-generated each and everytime you save your project.
 *
 * Do NOT hand edit this file.
 */

Ext.define('ZJ02.store.optFunctions', {
  extend: 'Ext.data.Store',

  requires: [
    'ZJ02.model.optFunctions'
  ],

  config: {
    data: [
      {
        vocationalId: 1,
        positionName: '技能1',
        positionId: 1,
        positionMaster: 1,
        positionMasterName: '熟练'
      },
      {
        vocationalId: 1,
        positionName: '技能1',
        positionId: 1,
        positionMaster: 1,
        positionMasterName: '熟练'
      }
    ],
    model: 'ZJ02.model.optFunctions',
    storeId: 'optFunctions'
  }
});