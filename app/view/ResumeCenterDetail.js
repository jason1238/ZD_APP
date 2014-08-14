/*
 * File: app/view/ResumeCenterDetail.js
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

Ext.define('ZJ02.view.ResumeCenterDetail', {
  extend: 'Ext.Container',

  requires: [
    'Ext.TitleBar',
    'Ext.Button',
    'Ext.Panel',
    'Ext.field.Hidden',
    'Ext.dataview.List',
    'Ext.XTemplate'
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
            xtype: 'container',
            itemId: 'con'
          }
        ]
      },
      {
        xtype: 'hiddenfield',
        id: 'resume_center_resume_id1'
      },
      {
        xtype: 'container',
        centered: true,
        height: 150,
        hidden: true,
        itemId: 'pop_private',
        width: 300,
        modal: true,
        items: [
          {
            xtype: 'titlebar',
            docked: 'top',
            title: '隐私设置',
            items: [
              {
                xtype: 'button',
                align: 'right',
                itemId: 'mybutton42',
                text: '取消'
              }
            ]
          },
          {
            xtype: 'list',
            data: [
              {
                text: '对所有公开',
                value: '2'
              },
              {
                text: '完全保密',
                value: '1'
              }
            ],
            height: 100,
            itemId: 'pop_resume_list',
            width: 300,
            disableSelection: true,
            itemTpl: [
              '<div>{text}</div>'
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
        fn: 'onMybutton42Tap11',
        event: 'tap',
        delegate: '#mybutton42'
      },
      {
        fn: 'onPop_resume_listItemTap11',
        event: 'itemtap',
        delegate: '#pop_resume_list'
      }
    ]
  },

  onMybutton23Tap1: function(button, e, eOpts) {
    button.up('navigationview').pop();
  },

  onMybutton42Tap11: function(button, e, eOpts) {
    button.up('#pop_private').hide();
  },

  onPop_resume_listItemTap11: function(dataview, index, target, record, e, eOpts) {
    var _this = this;


    var resume_id = _this.build_data.resumeId;

    var newValue = record.data.value;

    send_request( {
    	api:'resume_set_open_status',
    	method:'POST',
    	params:{
    		resumeId:resume_id,
    		openStatus:newValue
    	},
    	success:function(result, request){
    		if( result.success ){
    			switch( result.code ){
    				case '0000':
    					//成功
    					//console.log(result);
    					toast("你的隐私设置已更新。");
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
    	check_login:false
    } );


    _this.down('#pop_private').hide();
  },

  initialize: function() {
    this.callParent();
  },

  update: function(_p) {
    var _this = this;



    _this.build_page(_p);
  },

  build_page: function(data) {

    var _this = this;

    var x$con = i$('con',_this);

    _this.build_data = data;

    var item = data;

    _this.down('titlebar').setTitle(item.resumeTitle);


    var id_sufix = '_'+item.resumeId+'_'+_this.getId();


    var html = '<div class="resume_slide">'+
      //'<div class="title zjs-bg-blue">'+item.resumeTitle+'</div>'+
      '<div class="btns">'+
      '<a href="javascript:;" class="btn_refresh" data-id="'+item.resumeId+'" id="btn_refresh'+id_sufix+'"><i></i>刷新简历</a>'+
      '<a href="javascript:;" class="btn_preview" data-id="'+item.resumeId+'" id="btn_preview'+id_sufix+'"><i></i>预览简历</a>'+
      '<a href="javascript:;" class="btn_private" data-id="'+item.resumeId+'" id="btn_private'+id_sufix+'"><i></i>隐私设置</a>'+
      '<a href="javascript:;" class="btn_delete" data-id="'+item.resumeId+'" id="btn_delete'+id_sufix+'"><i></i>删除简历</a>'+
      '</div>'+
      '<div class="qr_code">'+
      '<div class="box">'+
      '<div class="side"></div>'+
      '<div class="code"><img src="'+item.qrCodePath+'" width="180" height="180" alt="" /></div>'+
      '</div>'+
      '</div>'+
      '</div>';

    x$con.setHtml(html);


    Ext.get( 'btn_refresh'+id_sufix ).on({'tap':function(){
      var $this_btn = j$(this);
      resume_refresh( $this_btn.data('id'),_this.getId() );
      //toast($this_btn.data('id'));
    }});

    Ext.get( 'btn_preview'+id_sufix ).on({'tap':function(){
      var $this_btn = j$(this);
      resume_preview( $this_btn.data('id'),_this.getId() );
      //toast($this_btn.data('id'));
    }});


    Ext.get( 'btn_private'+id_sufix ).on({'tap':function(){
      var $this_btn = j$(this);

      var x$pop_private = i$('pop_private',_this);
      x$pop_private.show();
      //resume_private( $this_btn.data('id'),_this.getId() );
      //toast($this_btn.data('id'));
    }});


    Ext.get( 'btn_delete'+id_sufix ).on({'tap':function(){
      var $this_btn = j$(this);
      resume_delete( $this_btn.data('id'),_this.getId() );
      //toast($this_btn.data('id'));
    }});


  }

});