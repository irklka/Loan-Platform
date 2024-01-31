Ext.define('MyApp.view.signup.Signup', {
    extend: 'Ext.window.Window',
    xtype: 'signup',

    requires: [
        'MyApp.view.login.SignupController',
        'Ext.form.Panel'
    ],

    controller: 'signup',
    bodyPadding: 10,
    title: 'Sign up Window',
    closable: false,
    autoShow: true,

    items: {
        xtype: 'form',
        reference: 'form',
        items: [{
            xtype: 'textfield',
            name: 'firstname',
            fieldLabel: 'First Name',
            allowBlank: false
        }, {
            xtype: 'textfield',
            name: 'lastname',
            fieldLabel: 'Last Name',
            allowBlank: false
        }, {
            xtype: 'textfield',
            name: 'email',
            fieldLabel: 'Email',
            allowBlank: false
        },{
            xtype: 'textfield',
            name: 'idnumber',
            maxLength: 11,
            enforceMaxLength: true,
            fieldLabel: 'Id Number',
            allowBlank: false
        },{
            xtype: 'textfield',
            name: 'dateofbirth',
            inputType: 'date',
            fieldLabel: 'Birth Date',
            allowBlank: false
        },{
            xtype: 'textfield',
            name: 'password',
            fieldLabel: 'Password',
            allowBlank: false
        },{
            xtype: 'displayfield',
            hideEmptyLabel: false,
            value: 'Enter any non-blank password'
        }],
        buttons: [{
            text: 'Login',
            listeners: {
                click: 'onLoginClick'
            }
        },{
            text: 'Sign up',
            formBind: true,
            listeners: {
                click: 'onSignupClick'
            }
        }]
    }
});
