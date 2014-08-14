/*
 * File: app/store/WhoSeeMe.js
 *
 * This file was generated by Sencha Architect version 3.0.3.
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

Ext.define('ZJ02.store.WhoSeeMe', {
  extend: 'Ext.data.Store',

  requires: [
    'ZJ02.model.WhoSeeMe'
  ],

  config: {
    data: [
      {
        viewId: 1234,
        viewTime: '2014/1/23 17:41:58',
        enterpriseName: '上海创驰网络有限公司',
        enterpriseTypeName: '上市企业',
        industry: '互联网/电子商务',
        viewTypeName: '下载'
      },
      {
        viewId: 1235,
        viewTime: '2014/1/23 17:41:58',
        enterpriseName: '上海圆通速递',
        enterpriseTypeName: '上市企业',
        industry: '互联网/电子商务',
        viewTypeName: '浏览'
      }
    ],
    model: 'ZJ02.model.WhoSeeMe',
    storeId: 'WhoSeeMe'
  }
});