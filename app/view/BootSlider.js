/*
 * File: app/view/BootSlider.js
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

Ext.define('ZJ02.view.BootSlider', {
  extend: 'Ext.Container',

  requires: [
    'Ext.carousel.Carousel',
    'Ext.Img',
    'Ext.Panel',
    'Ext.Button'
  ],

  config: {
    id: 'view_boot_slider',
    layout: 'fit',
    items: [
      {
        xtype: 'carousel',
        id: 'boot_carousel',
        itemId: 'mycarousel1',
        items: [
          {
            xtype: 'image',
            src: 'images/boot_slider_01.jpg'
          },
          {
            xtype: 'image',
            src: 'images/boot_slider_02.jpg'
          },
          {
            xtype: 'panel',
            layout: 'fit',
            items: [
              {
                xtype: 'image',
                src: 'images/boot_slider_03.jpg'
              },
              {
                xtype: 'panel',
                layout: 'vbox',
                items: [
                  {
                    xtype: 'panel',
                    flex: 3
                  },
                  {
                    xtype: 'button',
                    flex: 1,
                    html: '',
                    id: 'btn_boot_slider_enter',
                    margin: '',
                    style: 'background:none;border:0 none;',
                    top: '',
                    width: ''
                  },
                  {
                    xtype: 'panel',
                    flex: 2
                  }
                ]
              }
            ]
          },
          {
            xtype: 'image',
            id: 'boot_slider_enter',
            src: 'images/boot_slider_04.jpg'
          }
        ]
      }
    ],
    listeners: [
      {
        fn: 'onBoot_carouselActiveItemChange',
        event: 'activeitemchange',
        delegate: '#boot_carousel'
      },
      {
        fn: 'onView_boot_sliderPainted',
        event: 'painted'
      }
    ]
  },

  onBoot_carouselActiveItemChange: function(container, value, oldValue, eOpts) {


    if( 'boot_slider_enter' == value.id ){
      this.show_home();
    }
  },

  onView_boot_sliderPainted: function(element, eOpts) {
    if( navigator.splashscreen ){
      window.setTimeout(function(){
        navigator.splashscreen.hide();
      },3000);
    }
  },

  initialize: function() {
    this.callParent();
  },

  show_home: function() {
    var page_home = Ext.create('ZJ02.view.TabFrame', {fullscreen: true});
    Ext.Viewport.animateActiveItem(page_home,{ type: 'fade', direction: 'down' });
  }

});