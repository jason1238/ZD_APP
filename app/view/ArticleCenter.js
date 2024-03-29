/*
 * File: app/view/ArticleCenter.js
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

Ext.define('ZJ02.view.ArticleCenter', {
  extend: 'Ext.Container',
  alias: 'widget.articlecenter',

  requires: [
    'ZJ02.view.AcPerception',
    'ZJ02.view.AcResume',
    'ZJ02.view.AcInterview',
    'ZJ02.view.AcStaff',
    'Ext.TitleBar',
    'Ext.Button',
    'Ext.tab.Panel',
    'Ext.tab.Bar'
  ],

  config: {
    cls: 'zjs',
    layout: 'fit',
    items: [
      {
        xtype: 'titlebar',
        cls: 'zjs-bg-green',
        docked: 'top',
        ui: 'zjs',
        title: '求职锦囊',
        items: [
          {
            xtype: 'button',
            align: 'right',
            itemId: 'mybutton114',
            text: '发布'
          }
        ]
      },
      {
        xtype: 'tabpanel',
        cls: 'zjs-tab-top',
        items: [
          {
            xtype: 'container',
            title: '感悟',
            layout: 'fit',
            scrollable: 'vertical',
            items: [
              {
                xtype: 'acperception'
              }
            ]
          },
          {
            xtype: 'container',
            title: '简历',
            layout: 'fit',
            scrollable: 'vertical',
            items: [
              {
                xtype: 'acresume'
              }
            ]
          },
          {
            xtype: 'container',
            title: '面经',
            layout: 'fit',
            scrollable: 'vertical',
            items: [
              {
                xtype: 'acinterview'
              }
            ]
          },
          {
            xtype: 'container',
            title: '职场',
            layout: 'fit',
            scrollable: 'vertical',
            items: [
              {
                xtype: 'acstaff'
              }
            ]
          }
        ],
        tabBar: {
          cls: 'zjs-bg-green',
          docked: 'top',
          ui: 'zjs',
          defaults: {
            flex: 1
          }
        }
      }
    ],
    listeners: [
      {
        fn: 'onMybutton114Tap',
        event: 'tap',
        delegate: '#mybutton114'
      }
    ]
  },

  onMybutton114Tap: function(button, e, eOpts) {

    var page = Ext.create('ZJ02.view.AcSubmit', {fullscreen: true});
    button.up('navigationview').push(page);

  }

});