sap.ui.define([], function () {
  "use strict";
  return {
    setToPaidExtension: function (oEvent) {
      var oModel = this.getView().getModel();
      var oTable = oEvent
        .getSource()
        .getParent()
        .getParent()
        .getParent()
        .getTable();
      var aContext = this.extensionAPI.getSelectedContexts(oTable);
      var salesOrder = oModel.getData(aContext[0].sPath).SalesOrder;

      oModel.callFunction(
        "/ZDEMO_C_SalesOrder_TXSet_to_paid", // function import name
        "POST", // http method
        { SalesOrder: salesOrder }, // function import parameters
        null,
        function (oData, response) {
          alert("setToPaidExtension - success" + salesOrder);
          this.extensionAPI.rebindTable();
        }, // callback function for success
        function (oError) {
          alert("setToPaidExtension - error" + oError);
        }
      );
    },
  };
});
