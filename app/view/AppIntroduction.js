/*
 * File: app/view/AppIntroduction.js
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

Ext.define('ZJ02.view.AppIntroduction', {
  extend: 'Ext.Container',

  requires: [
    'Ext.TitleBar',
    'Ext.Button',
    'Ext.Panel'
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
        title: 'APP介绍',
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
          }
        ]
      },
      {
        xtype: 'panel',
        html: '<h2>App 介绍</h2><p>BlahBlahBlah</p>',
        id: 'app_intro_con',
        padding: '0.5em'
      }
    ],
    listeners: [
      {
        fn: 'onMybutton23Tap',
        event: 'tap',
        delegate: '#mybutton23'
      }
    ]
  },

  onMybutton23Tap: function(button, e, eOpts) {
    button.up('navigationview').pop();
  },

  initialize: function() {
    this.callParent();

    var x$con = x$('app_intro_con');

    x$con.setHtml('<h3>职点App客户端('+Ext.os.name+'版)<h3><p>版本号：'+_G.VER_STR+'</p><p>Version Code：'+_G.VER+'</p>');
  }

});