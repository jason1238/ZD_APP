/*
 * File: app/view/AcDetail.js
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

Ext.define('ZJ02.view.AcDetail', {
  extend: 'Ext.Container',

  requires: [
    'Ext.TitleBar',
    'Ext.Button',
    'Ext.Panel',
    'Ext.Label'
  ],

  config: {
    cls: 'zjs',
    layout: 'card',
    items: [
      {
        xtype: 'titlebar',
        cls: 'zjs-bg-green',
        docked: 'top',
        ui: 'zjs',
        title: '文章详情',
        items: [
          {
            xtype: 'button',
            height: 30,
            itemId: 'mybutton23',
            ui: 'plain',
            width: 30,
            icon: '',
            iconCls: 'zjs-icon-back',
            text: 'back'
          },
          {
            xtype: 'button',
            align: 'right',
            height: 30,
            itemId: 'mybutton24',
            ui: 'plain',
            width: 30,
            icon: '',
            iconCls: 'zjs-icon-share',
            text: 'back'
          }
        ]
      },
      {
        xtype: 'panel',
        html: '',
        scrollable: 'vertical',
        items: [
          {
            xtype: 'label',
            cls: 'article-headline',
            html: '资深HR给应届毕业生求职者的忠告',
            padding: '0.5em',
            style: 'text-align:center;font-size:20px;'
          },
          {
            xtype: 'panel',
            cls: 'detail_panel',
            padding: '0.2em 0.7em',
            layout: 'hbox',
            items: [
              {
                xtype: 'panel',
                flex: 1,
                cls: 'col-content',
                html: '2014-01-08 09:00',
                padding: '0 1em 0 0'
              },
              {
                xtype: 'panel',
                flex: 1,
                cls: 'col-content-r',
                html: '来源：武林盟主',
                width: 40
              }
            ]
          },
          {
            xtype: 'panel',
            cls: 'detail_content',
            html: '<p>招聘会详情内容招聘会详情内容招聘会详情内容招聘会详情内容招聘会详情内容招聘会详情内容招聘会详情内容</p><p>招聘会详情内容招聘会详情内容招聘会详情内容招聘会详情内容招聘会详情内容招聘会详情内容招聘会详情内容</p><p>招聘会详情内容招聘会详情内容招聘会详情内容招聘会详情内容招聘会详情内容招聘会详情内容招聘会详情内容</p><p>招聘会详情内容招聘会详情内容招聘会详情内容招聘会详情内容招聘会详情内容招聘会详情内容招聘会详情内容</p>',
            padding: '1em'
          }
        ]
      }
    ],
    listeners: [
      {
        fn: 'onMybutton23Tap1',
        event: 'tap',
        delegate: '#mybutton23'
      },
      {
        fn: 'onMybutton23Tap21',
        event: 'tap',
        delegate: '#mybutton24'
      }
    ]
  },

  onMybutton23Tap1: function(button, e, eOpts) {
    button.up('navigationview').pop();
  },

  onMybutton23Tap21: function(button, e, eOpts) {
    button.up('navigationview').pop();
  }

});