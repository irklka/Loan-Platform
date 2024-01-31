// app/model/User.js
Ext.define('MyApp.model.User', {
    extend: 'MyApp.model.Base',
    fields: [
        'firstname', 'lastname', 'idNumber', 'dateOfBirth', 'email', 'password'
    ]
});
