Ext.define('MyApp.model.Loan', {
    extend: 'MyApp.model.Base',

    fields: [
        'id', 'type', 'requestedAmount', 'currency', 'loanPeriod', 'status', 'user.fullname', 'loanOfficer.fullname'
    ],
});