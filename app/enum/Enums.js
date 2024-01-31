Ext.define('MyApp.enum.Enums', {
    singleton: true,

    loanType: {
        Fast: 1,
        Auto: 2,
        Installment: 3
    },

    currencyCode: {
        GEL: 100,
        USD: 101,
        EUR: 102
    },

    loanStatus: {
        Sent: 1,
        Processing: 2,
        Approved: 3,
        Rejected: 4
    },

    reverseEnum: function (enumObject) {
        return Object.fromEntries(Object.entries(enumObject).map(([key, value]) => [value, key]));
    },

    // Helper method to get enum name by value
    getNameByValue: function (enumObject, value) {
        return Object.keys(enumObject).find(key => enumObject[key] === value);
    },

    // Helper method to get enum value by name
    getValueByName: function (enumObject, name) {
        return enumObject[name];
    },
    
    mapTypeToString: function (type) {
        return this._mapToString(type, this.loanType);
    },

    mapCurrencyToString: function (currency) {
        return this._mapToString(currency, this.currencyCode);
    },

    mapStatusToString: function (status) {
        return this._mapToString(status, this.loanStatus);
    },

    _mapToString: function (value, enumObj) {
        for (const key in enumObj) {
            if (enumObj[key] === value) {
                return key;
            }
        }
        return 'Unknown Value';
    }
});