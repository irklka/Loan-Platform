Ext.define('MyApp.view.login.LoginController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.login',
    routes: {
        'login': 'onLoginRoute'
    },


    onLoginRoute:function(params){

    },
    onLoginClick: function (button) {
        var form = button.up('form');
        var values = form.getValues();
        var view = this.getView();
        Ext.Ajax.request({
            url: 'api/users/login', 
            method: 'POST',
            jsonData: values,
            success: function (response) {
                var responseData = Ext.decode(response.responseText);

                localStorage.setItem('authToken', responseData.token);
                localStorage.setItem('userId', responseData.user.userId);
                localStorage.setItem('userFullname', responseData.user.fullname);

                view.destroy();

                Ext.create({
                    xtype: 'app-main'
                }); 
            },
            failure: function (response) {
                var responseData = Ext.decode(response.responseText);
                Ext.Msg.alert('Error', responseData.error);
            }
        });
    },

    onSignupClick: function(){
        this.getView().destroy();

        Ext.create({
            xtype: 'signup'
        }); 
    }
});
