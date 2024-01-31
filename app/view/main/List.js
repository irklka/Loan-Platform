/**
 * This view is an example list of people.
 */
Ext.define('MyApp.view.main.List', {
    extend: 'Ext.grid.Panel',
    xtype: 'mainlist',

    requires: [
        'MyApp.store.Loans'
    ],

    title: 'Active Loans',

    store: {
        type: 'loan'
    },

    columns: [
        { text: 'Type',  dataIndex: 'type', flex: 1 },
        { text: 'Requested Amount', dataIndex: 'requestedAmount', flex: 1 },
        { text: 'Currency', dataIndex: 'currency', flex: 1 },
        { text: 'Status', dataIndex: 'status', flex: 1 },
        { 
            text: 'User',
            dataIndex: 'user.fullname', 
            flex: 2,
            renderer: function (value, metaData, record) {
                return record.get('user') 
                    ? record.get('user').fullname 
                    : 'No Name';
            } 
        },
        {
            text: 'Loan Officer',
            dataIndex: 'loanOfficer.fullname', 
            flex: 2,
            renderer: function (value, metaData, record) {
                return record.get('loanOfficer') 
                    ? record.get('loanOfficer').fullname 
                    : 'No Name';
            } 
        },
        {
            xtype: 'actioncolumn',
            text: 'Actions',
            width: 100,
            items: [
            {
                iconCls: 'x-fa fa-check grid-actions green',
                tooltip: 'Approve',
                handler: 'onApproveLoan'
            },
            {
                iconCls: 'x-fa fa-minus grid-actions red',
                tooltip: 'Delete',
                handler: 'onDeleteLoan'
            },
            {
                iconCls: 'x-fa fa-edit grid-actions blue',
                tooltip: 'Edit',
                handler: 'onEditLoan'
            }]
        }
    ],
    listeners: {
        select: 'onItemSelected'
    }
});
