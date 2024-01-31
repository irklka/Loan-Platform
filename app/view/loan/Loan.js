Ext.define('MyApp.view.loan.Loan', {
    extend: 'Ext.panel.Panel',
    xtype: 'loan',

    title: 'Request Loan',
    controller: 'loan',

    items: [{
        xtype: 'form',
        reference: 'loanForm',
        bodyPadding: 10,
        items: [{
            xtype: 'combobox',
            fieldLabel: 'Loan Type',
            name: 'type',
            store: Object.entries(MyApp.enum.Enums.reverseEnum(MyApp.enum.Enums.loanType)),
            queryMode: 'local',
            editable: false,
            allowBlank: false
        }, {
            xtype: 'numberfield',
            fieldLabel: 'Requested Amount',
            name: 'requestedAmount',
            minValue: 1,
            allowBlank: false
        }, {
            xtype: 'combobox',
            fieldLabel: 'Currency',
            name: 'currency',
            store: Object.entries(MyApp.enum.Enums.reverseEnum(MyApp.enum.Enums.currencyCode)),
            queryMode: 'local',
            editable: false,
            allowBlank: false
        }, {
            xtype: 'numberfield',
            fieldLabel: 'Loan Period (Months)',
            name: 'loanPeriod',
            minValue: 1,
            allowBlank: false
        }],
        buttons: [{
            text: 'Submit',
            formBind: true,
            handler: 'onSubmitLoanRequest'
        }]
    }]
});
