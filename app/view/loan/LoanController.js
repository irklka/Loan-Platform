Ext.define('MyApp.view.loan.LoanController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.loan',

    onSubmitLoanRequest: function () {
        var form = this.getView().lookupReference('loanForm');

        var formData = form.getValues();
        formData.userId = localStorage.getItem('userId');
        formData.type = Number(formData.type);
        formData.currency = Number(formData.currency);
        formData.requestedAmount = Number(formData.requestedAmount);
        formData.loanPeriod = Number(formData.loanPeriod);
        
        Ext.Ajax.request({
            url: 'api/loans',
            method: 'POST',
            jsonData: formData,
            success: function (response) {
                Ext.Msg.alert('Success', 'Loan request submitted successfully!', function () {
                    location.reload();
                });
                form.reset();
            },
            failure: function (response) {
                Ext.Msg.alert('Error', "Invalid response, try again");
            }
        });
    }
});