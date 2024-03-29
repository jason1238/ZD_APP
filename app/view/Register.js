/*
 * File: app/view/Register.js
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

Ext.define('ZJ02.view.Register', {
  extend: 'Ext.Container',

  requires: [
    'Ext.form.Panel',
    'Ext.form.FieldSet',
    'Ext.field.Email',
    'Ext.field.Password',
    'Ext.field.Checkbox',
    'Ext.Button',
    'Ext.TitleBar'
  ],

  config: {
    cls: 'zjs',
    layout: 'card',
    items: [
      {
        xtype: 'formpanel',
        scrollable: 'vertical',
        items: [
          {
            xtype: 'fieldset',
            items: [
              {
                xtype: 'emailfield',
                id: 'register.fe_email',
                label: '用户名',
                required: true,
                placeHolder: 'email@example.com'
              },
              {
                xtype: 'passwordfield',
                id: 'register.fe_password',
                label: '密码',
                required: true
              },
              {
                xtype: 'passwordfield',
                id: 'register.fe_password_2',
                label: '确认密码',
                required: true
              },
              {
                xtype: 'textfield',
                id: 'register.fe_name',
                label: '真实姓名',
                required: true
              }
            ]
          },
          {
            xtype: 'fieldset',
            items: [
              {
                xtype: 'checkboxfield',
                id: 'register.fe_agreement',
                label: '我已阅读并接受用户协议',
                labelAlign: 'right',
                labelWidth: '70%'
              }
            ]
          },
          {
            xtype: 'button',
            itemId: 'mybutton25',
            margin: '10px 0.5em 0',
            ui: 'confirm',
            text: '注册'
          }
        ]
      },
      {
        xtype: 'titlebar',
        cls: 'zjs-bg-green',
        docked: 'top',
        ui: 'zjs',
        title: '注册',
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
      }
    ],
    listeners: [
      {
        fn: 'onMybutton25Tap',
        event: 'tap',
        delegate: '#mybutton25'
      },
      {
        fn: 'onMybutton23Tap',
        event: 'tap',
        delegate: '#mybutton23'
      }
    ]
  },

  onMybutton25Tap: function(button, e, eOpts) {
    var fe_email = x$('register.fe_email');
    var fe_password = x$('register.fe_password');
    var fe_password_2 = x$('register.fe_password_2');
    var fe_name = x$('register.fe_name');
    var fe_agreement = x$('register.fe_agreement');

    var email_val			= fe_email.getValue();
    var password_val	= fe_password.getValue();
    var password_val_2	= fe_password_2.getValue();
    var name_val			= fe_name.getValue();
    var agreement_val	= fe_agreement.getChecked();







    var email_preg = /^([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/;


    if( email_val.length === 0 ){
      toast('请输入邮箱地址');
      return ;
    }else if( email_val.length < 6 || email_val.length > 50  ){
      toast('账户名为长度6-50的邮箱地址');
      return ;
    }else if( !email_preg.test(email_val) ){
      toast('请输入正确的邮箱地址');
      return ;
    }



    if( password_val.length === 0 ){
      toast('请输入密码');
      return ;
    }else if( password_val.length < 6 || password_val.length > 50  ){
      toast('密码为长度6-50的邮箱字符');
      return ;
    }



    if( password_val != password_val_2 ){
      toast('您两次输入的密码不同，请修正。');
      return ;
    }


    if(!agreement_val){
      toast('您必须接受用户协议才能注册。');
      return ;
    }








    if( email_val && password_val && name_val ){

      send_request( {
        api:'register',
        method:'POST',
        params:{
          userName:email_val,
          password:password_val,
          confirmPassword:password_val,
          realname:name_val,
          agreeResiterProtocol:'on'
        },
        success:function(result, request){
          if( result.success ){
            switch( result.code ){
              case '0000':
                //成功
                toast("注册成功！");
                //button.up('navigationview').pop();


                send_request( {
                  api:'login',
                  method:'POST',
                  params:{
                    userName:email_val,
                    password:password_val
                  },
                  success:function(result, request){
                    if( result.success ){
                      switch( result.code ){
                        case '0000':
                          //成功
                          toast("登录成功。欢迎回来！");
                          set_s('token',result.token);
                          //reload_app();
                          go_home();
                          break;
                        case '1001':
                          //失败
                          toast("登录失败，请输入正确的用户名和密码");
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
                  trigger:button,
                  check_login:false
                } );



                break;
              case '1003':
                //失败
                toast("抱歉，此用户名已被注册。");
                break;
              case '1004':
                //失败
                toast("密码不一致，请修正。");
                break;
              case '1005':
                //失败
                toast("请先同意注册协议。");
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
        trigger:button,
        check_login:false
      } );
    }else{
      toast("请输入所以必填项。");
    }









    //Ext.Msg.alert("恭喜您，注册成功！");
    //button.up('navigationview').pop();
  },

  onMybutton23Tap: function(button, e, eOpts) {
    button.up('navigationview').pop();
  }

});