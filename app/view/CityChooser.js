/*
 * File: app/view/CityChooser.js
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

Ext.define('ZJ02.view.CityChooser', {
  extend: 'Ext.Container',

  requires: [
    'Ext.dataview.NestedList',
    'Ext.TitleBar',
    'Ext.Button'
  ],

  config: {
    layout: 'fit',
    items: [
      {
        xtype: 'nestedlist',
        id: 'nested_city_list',
        itemId: 'mynestedlist3',
        store: 'NestedCitys',
        title: '选择城市',
        useTitleAsBackText: false,
        toolbar: {
          xtype: 'titlebar',
          cls: 'zjs-bg-green',
          ui: 'zjs',
          title: '选择城市',
          items: [
            {
              xtype: 'button',
              height: 30,
              id: 'nested_city_list_btn_pop',
              itemId: 'mybutton23',
              ui: 'plain',
              width: 30,
              icon: '',
              iconCls: 'zjs-icon-back',
              text: 'back'
            }
          ]
        }
      }
    ],
    listeners: [
      {
        fn: 'onMybutton23Tap11',
        event: 'tap',
        delegate: '#nested_city_list_btn_pop'
      },
      {
        fn: 'onNested_city_listActiveItemChange',
        event: 'activeitemchange',
        delegate: '#nested_city_list'
      },
      {
        fn: 'onNested_city_listLeafItemTap',
        event: 'leafitemtap',
        delegate: '#nested_city_list'
      }
    ]
  },

  onMybutton23Tap11: function(button, e, eOpts) {
    button.up('navigationview').pop();
  },

  onNested_city_listActiveItemChange: function(container, value, oldValue, eOpts) {


    x$nlist = x$('nested_city_list');
    x$btn_pop = x$('nested_city_list_btn_pop');


    var record = value.listItems[0].getRecord();


    if( record.data.parentId == "NestedCitys-root" ){
      x$btn_pop.show();
    }else{
      x$btn_pop.hide();
    }
  },

  onNested_city_listLeafItemTap: function(nestedlist, list, index, target, record, e, eOpts) {

    var data = record.data;

    change_city(data.record.areaId,data.record.areaName);
    nestedlist.up('navigationview').pop();

  },

  initialize: function() {
    this.callParent();



    x$nlist = x$('nested_city_list');

    x$back_btn = x$nlist.getBackButton();


    x$back_btn.setIconCls('zjs-icon-back');
    x$back_btn.setUi('plain');
    x$back_btn.setText(null);

    //console.log('zzzz');

    //var data = _DATA_CITYS;

    //console.log(data);


    //x$nlist.getStore().setRoot(data);

  }

});