/*
 * File: app/view/ResumeCenter.js
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

Ext.define('ZJ02.view.ResumeCenter', {
  extend: 'Ext.Container',

  requires: [
    'Ext.TitleBar',
    'Ext.Button',
    'Ext.Panel',
    'Ext.dataview.DataView',
    'Ext.XTemplate',
    'Ext.Img'
  ],

  config: {
    layout: 'fit',
    items: [
      {
        xtype: 'titlebar',
        cls: 'zjs-bg-blue',
        docked: 'top',
        ui: 'zjs',
        title: '简历中心',
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
        xtype: 'panel',
        hidden: false,
        itemId: 'has_data',
        layout: 'fit',
        items: [
          {
            xtype: 'dataview',
            cls: 'zjs-listview-interview-notice',
            itemId: 'list',
            minHeight: 180,
            scrollable: 'vertical',
            disableSelection: true,
            itemTpl: [
              '<div class="li">',
              '  <div class="c">',
              '    <h4>{resumeTitle}</h4>',
              '    <p>  <span class="fl"><em>完成度：{resumeComplete}%</em></span> <span class="fr"><em></em></span> </p>',
              '  </div>',
              '  <div class="i"> <span></span> </div>',
              '</div>',
              ''
            ]
          }
        ]
      },
      {
        xtype: 'panel',
        hidden: true,
        itemId: 'no_data',
        scrollable: 'vertical',
        items: [
          {
            xtype: 'panel',
            cls: 'result_title',
            html: '  您还未创建简历，请去优渡网站创建您的简历。网址：www.eyoudu.com',
            padding: 10
          },
          {
            xtype: 'panel',
            cls: 'rc_nodata_qrcode_resume',
            html: '  在参加招聘会时，您还带纸张打印的简历吗？OUT了！您只需让招聘官扫一扫您的二维码简历，对方就看到您的简历了（前提是你先要创建简历哦！）'
          },
          {
            xtype: 'panel',
            height: 180,
            margin: '20px auto',
            width: 213,
            layout: 'hbox',
            items: [
              {
                xtype: 'panel',
                height: 180,
                width: 33,
                items: [
                  {
                    xtype: 'image',
                    height: 180,
                    width: 33,
                    src: 'images/qr_code_title.png'
                  }
                ]
              },
              {
                xtype: 'panel',
                height: 180,
                width: 180,
                items: [
                  {
                    xtype: 'image',
                    height: 180,
                    id: 'resume_center_qr_code2',
                    width: 180,
                    src: 'images/qr_code.jpg'
                  }
                ]
              }
            ]
          }
        ]
      }
    ],
    listeners: [
      {
        fn: 'onMybutton23Tap1',
        event: 'tap',
        delegate: '#mybutton24'
      },
      {
        fn: 'onMydataview2ItemTap11',
        event: 'itemtap',
        delegate: '#list'
      }
    ]
  },

  onMybutton23Tap1: function(button, e, eOpts) {
    button.up('navigationview').pop();
  },

  onMydataview2ItemTap11: function(dataview, index, target, record, e, eOpts) {
    var item_data = record.data;
    change_page('ResumeCenterDetail',dataview,item_data);
  },

  initialize: function() {
    this.callParent();
  },

  update: function(_p) {
    var _this = this;

    //if( _p && _p.keywords ){

      send_request( {
        api:'resume_list',
        method:'POST',
        params:{
          //pageSize:100,
        },
        success:function(result, request){
          if( result.success ){
            switch( result.code ){
              case '0000':
                //成功
                //console.log(result);
                _this.build_page(result.data);
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

    //}



  },

  build_page: function(data) {

    var _this = this;


    var x$has_data = i$('has_data',_this);
    var x$no_data = i$('no_data',_this);

    var x$slider = i$('slider',_this);


    var x$list = i$('list',_this);

    console.log(x$list);

    var $page = j$(_this);

    if( data && data.length ){

      set_store_data( x$list,data );

      x$has_data.show();
      x$no_data.hide();
    }else{
      x$has_data.hide();
      x$no_data.show();
    }
  }

});