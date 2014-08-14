/*
 * File: app/view/InternPosition.js
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

Ext.define('ZJ02.view.InternPosition', {
  extend: 'Ext.Container',

  requires: [
    'Ext.TitleBar',
    'Ext.Button',
    'Ext.dataview.DataView',
    'Ext.XTemplate'
  ],

  config: {
    layout: 'fit',
    items: [
      {
        xtype: 'titlebar',
        cls: 'zjs-bg-green',
        docked: 'top',
        ui: 'zjs',
        title: '实习职位',
        items: [
          {
            xtype: 'button',
            height: 30,
            itemId: 'mybutton24',
            ui: 'plain',
            width: 30,
            icon: '',
            iconCls: 'zjs-icon-back',
            text: 'back'
          }
        ]
      },
      {
        xtype: 'dataview',
        cls: 'zjs-listview-3line-c',
        id: 'list_intern_pos',
        itemId: 'mydataview5',
        minHeight: 180,
        scrollable: 'vertical',
        disableSelection: true,
        itemTpl: [
          '<div class="li">',
          '  <div class="c list_c_job_favourite">',
          '    <div class="cw">',
          '      <h4>{positionName}</h4>',
          '      <div class="cp">',
          '        <div class="cl">',
          '          <p>{companyName}</p>',
          '          <p><em>{date_fullyeardate}</em></p>',
          '        </div>',
          '        <div class="cr">',
          '          <p>薪资</p>',
          '          <p>{salaryName}</p>',
          '        </div>',
          '      </div>',
          '    </div>',
          '  </div>',
          '  <div class="i"> <span></span> </div>',
          '</div>',
          '',
          ''
        ]
      }
    ],
    listeners: [
      {
        fn: 'onMybutton23Tap31111',
        event: 'tap',
        delegate: '#mybutton24'
      },
      {
        fn: 'onMydataview5ItemTap',
        event: 'itemtap',
        delegate: '#list_intern_pos'
      }
    ]
  },

  onMybutton23Tap31111: function(button, e, eOpts) {
    button.up('navigationview').pop();
  },

  onMydataview5ItemTap: function(dataview, index, target, record, e, eOpts) {
    var data = record.data;

    change_page('InternPositionDetail',dataview,data);
  },

  initialize: function() {
    this.callParent();
  },

  update: function(_p) {
    var _this = this;


    send_request( {
      api:'p_intern',
      method:'POST',
      params:{
        pageSize:100
      },
      success:function(result, request){
        if( result.success ){
          switch( result.code ){
            case '0000':
              //成功
              console.log(result);
              _this.build_list(result.data);
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
      check_login:true
    } );

  },

  build_list: function(data) {
    var x$list = x$('list_intern_pos');


    for( var i=0;i<data.length;i++ ){
      var date_ra = parse_date(data[i].refreshiTime,'date_');
      jQuery.extend( data[i],date_ra );

      data[i].salaryName = data[i].salary || '面议';


    }


    if(data.length){
      x$list.removeCls('zj-list-no-data');
      set_store_data( x$list,data );
    }else{
      x$list.addCls('zj-list-no-data');
      set_store_data( x$list,[] );
    }


    refresh_scroll(x$list);
  }

});