// EditLoanWindow.js
Ext.define('MyApp.view.window.EditLoanWindow', {
    extend: 'Ext.window.Window',
    xtype: 'editloanwindow',

    title: 'Edit Loan',
    modal: true,
    width: 400,
    height: 300,
    layout: 'fit',

    items: [{
        xtype: 'form',
        reference: 'editLoanForm',
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
        buttons: [
            {
                text: 'Save',
                handler: 'onSaveEditLoan'
            },
            {
                text: 'Cancel',
                handler: 'onCancelEditLoan'
            }
        ]
    }]
});
