/**
 * This class is the controller for the main view for the application. It is specified as
 * the "controller" of the Main view class.
 */
Ext.define('MyApp.view.main.MainController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.main',

    onLogout: function () {
        // Remove the localStorage key/value
        localStorage.removeItem('authToken');
        localStorage.removeItem('userId');
        localStorage.removeItem('userFullname');

        // Remove Main View
        this.getView().destroy();

        // Add the Login Window
        Ext.create({
            xtype: 'login'
        });
    },
    editLoanWindow: null,

    onEditLoan: function (grid, rowIndex, colIndex, item, e, record) {
        editLoanWindow = Ext.create({
            xtype: 'editloanwindow',
            reference: 'editLoanWindow'
        });
        editLoanWindow.down('form').loadRecord(record);
        editLoanWindow.show();
    },

    onSaveEditLoan: function () {
        var form = editLoanWindow.down('form');
        var record = form.getRecord();

        var formData = form.getValues();

        formData.userId = localStorage.getItem('userId');
        formData.type = isNaN(Number(formData.type)) 
            ? MyApp.enum.Enums.getValueByName(MyApp.enum.Enums.loanType, formData.type) 
            : Number(formData.type);
        formData.currency = isNaN(Number(formData.currency)) 
            ? MyApp.enum.Enums.getValueByName(MyApp.enum.Enums.currencyCode, formData.currency) 
            : Number(formData.currency);
        formData.requestedAmount = Number(formData.requestedAmount);
        formData.loanPeriod = Number(formData.loanPeriod);
        formData.loanRequestId = record.get('id');

        Ext.Ajax.request({
            url: 'api/loans',
            method: 'PUT',
            jsonData: formData,
            success: function (response) {
                Ext.Msg.alert('Success', 'Loan request submitted successfully!', function () {
                    location.reload();
                });
            },
            failure: function (response) {
                Ext.Msg.alert('Error', "Invalid response, try again");
            }
        });
        editLoanWindow.close();
    },

    onCancelEditLoan: function () {
        editLoanWindow.destroy();
    },

    onApproveLoan: function (grid, rowIndex, colIndex, item, e, record) {
        this.changeLoanStatus(record, MyApp.enum.Enums.loanStatus.Approved);
    },

    onDeleteLoan: function (grid, rowIndex, colIndex, item, e, record) {
        this.changeLoanStatus(record, MyApp.enum.Enums.loanStatus.Rejected);
    },

    changeLoanStatus: function (loan, newStatus) {
        // Make an AJAX request to update the loan status
        Ext.Ajax.request({
            url: 'api/loans/status',
            method: 'PUT',
            jsonData: {
                loanRequestId: loan.id,
                loanOfficerId: localStorage.getItem('userId'),
                status: newStatus
            },
            success: function (response) {
                Ext.Msg.alert('Success', "Loan was "+ MyApp.enum.Enums.mapStatusToString(newStatus), function () {
                    location.reload();
                });
            },
            failure: function (response) {
                var responseData = Ext.decode(response.responseText);
                Ext.Msg.alert('Error', responseData);
            }
        });
    }
});
