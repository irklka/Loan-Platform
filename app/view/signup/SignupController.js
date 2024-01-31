Ext.define('MyApp.view.login.SignupController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.signup',
    routes: {
        'signup': 'onSignupRoute'
    },
    
    onSignupRoute: function(params){

    },
    onSignupClick: function(button){
        var form = button.up('form');
        var values = form.getValues();
        var view = this.getView();
        Ext.Ajax.request({
            url: 'api/users', 
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
    onLoginClick: function(){
        this.getView().destroy();

        Ext.create({
            xtype: 'login'
        }); 
    }

});