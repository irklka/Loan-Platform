Ext.define('MyApp.store.Loans', {
    extend: 'Ext.data.Store',
    alias: 'store.loan',
    model: 'MyApp.model.Loan',
    proxy: {
        type: 'ajax',
        url: 'api/loans',
        reader: {
            type: 'json',
            rootProperty: 'loanRequests'
        }
    },

    autoLoad: true,
    
    listeners: {
        load: function (store, records, successful, operation, eOpts) {
            if (successful) {
                records.forEach(function (record) {
                    record.set('type', MyApp.enum.Enums.mapTypeToString(record.get('type')));
                    record.set('currency', MyApp.enum.Enums.mapCurrencyToString(record.get('currency')));
                    record.set('status', MyApp.enum.Enums.mapStatusToString(record.get('status')));
                });
            } else {
                console.error('Failed to load data:', operation.getError());
            }
        }
    }
});
