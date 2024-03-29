/*
 * File: app/view/PositionSubscribeByPositionSelectIndustry.js
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

Ext.define('ZJ02.view.PositionSubscribeByPositionSelectIndustry', {
  extend: 'Ext.Container',
  alias: 'widget.PositionSubscribeByPositionSelectIndustry',

  requires: [
    'Ext.Panel',
    'Ext.dataview.NestedList',
    'Ext.TitleBar',
    'Ext.Button'
  ],

  config: {
    layout: 'fit',
    items: [
      {
        xtype: 'panel',
        centered: false,
        id: 'pos_sub_by_pos_pop_nlist_industry',
        layout: 'fit',
        modal: true,
        items: [
          {
            xtype: 'nestedlist',
            id: 'pos_sub_by_pos_nlist_industry',
            itemId: 'mynestedlist',
            store: 'NestedDataIndustry_sub3',
            title: '行业',
            toolbar: {
              xtype: 'titlebar',
              items: [
                {
                  xtype: 'button',
                  align: 'right',
                  itemId: 'mybutton75',
                  text: '取消'
                }
              ]
            }
          }
        ]
      }
    ],
    listeners: [
      {
        fn: 'onMybutton75Tap',
        event: 'tap',
        delegate: '#mybutton75'
      },
      {
        fn: 'onPos_sub_by_pos_nlist_industryLeafItemTap',
        event: 'leafitemtap',
        delegate: '#pos_sub_by_pos_nlist_industry'
      }
    ]
  },

  onMybutton75Tap: function(button, e, eOpts) {
    var x$text = x$('pos_sub_by_pos_fe_industry');
    var x$pop = x$('pos_sub_by_pos_pop_nlist_industry');

    x$text.setValue('');
    set_data(x$text,'id',null);

    this.up('navigationview').pop();
  },

  onPos_sub_by_pos_nlist_industryLeafItemTap: function(nestedlist, list, index, target, record, e, eOpts) {
    var x$text = x$('pos_sub_by_pos_fe_industry');
    var x$pop = x$('pos_sub_by_pos_pop_nlist_industry');


    var data = record.data;


    x$text.setValue(data.record.industryName);
    set_data(x$text,'id',data.record.industryId);
    this.up('navigationview').pop();
  },

  init_industry: function(data) {
    var x$nlist = x$('pos_sub_by_pos_nlist_industry');

    var n_data = make_nested_data(data,0,'industryId','industryName');
    set_store_data( x$nlist,n_data );

  },

  initialize: function() {
    this.callParent();

    var _this = this;

    send_request( {
      api:'opt_industry',
      method:'POST',
      params:{
        pageSize:100,
        parentId:_G._cityId
      },
      success:function(result, request){
        if( result.success ){
          switch( result.code ){
            case '0000':
              //成功
              _this.init_industry(result.data);
              break;
            case '1001':
              //失败
              break;
            default:
              toast("errCode:"+result.code);
              break;
          }
        }else{

        }
      },
      fail:function(result){
        toast("您的网络似乎有点问题，请稍候再试！");
      },
      text:'加载中',
      silent:false,
      trigger:_this,
      check_login:false,
      group:'p_s_b_p'
    } );


  }

});