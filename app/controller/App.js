/*
 * File: app/controller/App.js
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

Ext.define('ZJ02.controller.App', {
  extend: 'Ext.app.Controller',

  config: {
    refs: {
      btnBootEnter: '#btn_boot_slider_enter'
    },

    control: {
      "btnBootEnter": {
        tap: 'onBtnBootEnterTap'
      }
    }
  },

  onBtnBootEnterTap: function(button, e, eOpts) {

    //Ext.get('view_boot_slider').hide();
    var page_home = Ext.create('ZJ02.view.TabFrame', {fullscreen: true});
    Ext.Viewport.animateActiveItem(page_home,{ type: 'fade', direction: 'down' });
  }

});