sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller) {
        "use strict";

        return Controller.extend("zcrmsalesdashboard.controller.Main", {
            onInit: function () {

            },

            onSelectedData: function(oEvent) {
                debugger;
                //let sServiceName = oEvent.getSource().getDataset().getBinding("data").getPath();
                var index = oEvent.mParameters.data[0].data._context_row_number;
                var sEntityKey = oEvent.getSource().getDataset().getBinding("data").aKeys[index];
                var oBinding = oEvent.getSource().getDataset().getBinding("data").getModel().getProperty("/"+sEntityKey);
                if( oBinding.ObjIdsStr && oBinding.ProcessTypeStr){
                    const url = `${this.crmUrl}?objecttype=${oBinding.Objtype}&processtype=${oBinding.ProcessTypeStr}&objidstring=${oBinding.ObjIdsStr}`;
                    // var url = this.crmUrl + "?objecttype=LEAD&processtype=" + oBinding.ProcessTypeStr + "&objidstring=" + oBinding.ObjIdsStr;
                    // if(client)
                        // url+="&" + client;
                    window.open(url,"_blank");
                }
                debugger;
            }
        });
    });
