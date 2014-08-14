/*
 * File: app/view/InterviewNoticeDetail.js
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

Ext.define('ZJ02.view.InterviewNoticeDetail', {
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
        title: '面试通知',
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
        id: 'c_t_d_scp1',
        scrollable: 'vertical',
        items: [
          {
            xtype: 'label',
            cls: 'article-headline',
            html: '载入中，请稍候...',
            id: 'interview-notice-detail-title',
            padding: '0.5em',
            style: 'text-align:center;font-size:20px;'
          },
          {
            xtype: 'panel',
            cls: 'detail_panel',
            padding: '0.2em 0.5em 0.2em 0.8em',
            layout: 'hbox',
            items: [
              {
                xtype: 'panel',
                flex: 1,
                cls: 'col-content',
                id: 'interview-notice-detail-info',
                padding: '0 1em 0 0'
              }
            ]
          },
          {
            xtype: 'panel',
            cls: 'detail_content',
            id: 'interview-notice-detail-desc',
            padding: '1em'
          }
        ]
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
  },

  update: function(_p) {
    var _this = this;


    var x$content = x$('interview_detail_content');


    x$title = x$('interview-notice-detail-title');
    x$info = x$('interview-notice-detail-info');
    x$desc = x$('interview-notice-detail-desc');



    if( _p && _p.auditionId )


    send_request( {
      api:'msg.interview.detail',
      method:'POST',
      params:{
        auditionId:_p.auditionId,
        pageSize:100
      },
      success:function(result, request){


        console.log( result );


        if( result.success ){
          switch( result.code ){
            case '0000':


              console.log(x$desc);


              console.log( result.data.auditionContent );


              //成功
              x$title.setHtml(result.data.companyName);
              x$info.setHtml('<p>面试职位：'+result.data.positionName+'</p>'+'<p>面试时间：'+result.data.auditionTime+'</p>');
              x$desc.setHtml(result.data.auditionContent);

              refresh_scroll(x$desc);

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


  }

});