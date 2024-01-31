Ext.define('MyApp.utils.BaseUrl',{
    singleton: true,
    requires: [
        'Ext.Ajax'
    ],

    config: {
        baseUrl: ''
    },

    constructor: function(config){
        this.initConfig(config);

        Ext.Ajax.on('beforerequest', this.onBeforeAjaxRequest, this);
        
    },

    onBeforeAjaxRequest : function(connection, options){
        options.url = this.getBaseUrl() + options.url;
        var token = window.localStorage.authToken;
        if (!token) return;
        options.headers = options.headers ? options.headers : {};
        options.headers.Authorization = 'Bearer ' + token;
    }

});