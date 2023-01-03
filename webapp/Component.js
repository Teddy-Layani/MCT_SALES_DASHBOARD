/**
 * eslint-disable @sap/ui5-jsdocs/no-jsdoc
 */

sap.ui.define([
        "sap/ui/core/UIComponent",
        "sap/ui/Device",
        "zcrmsalesdashboard/model/models"
    ],
    function (UIComponent, Device, models) {
        "use strict";

        return UIComponent.extend("zcrmsalesdashboard.Component", {
            metadata: {
                manifest: "json"
            },

            /**
             * The component is initialized by UI5 automatically during the startup of the app and calls the init method once.
             * @public
             * @override
             */
            init: function () {
                // call the base component's init function
                UIComponent.prototype.init.apply(this, arguments);

                // enable routing
                this.getRouter().initialize();

                // set the device model
                this.setModel(models.createDeviceModel(), "device");

                // Load fake model
                this.fakeModel();
            },
            fakeModel: function() {
                var oFakeData = new sap.ui.model.json.JSONModel(
                    {
                        "opportunityByStatus": [
                            {   "date": "/Date(1530144000000+0530)/",
                                "status": "1", 
                                "description": "in Process", 
                                "quantity": "13"
                            },{ "date": "/Date(1530144000000+0530)/",
                                "status": "2", 
                                "description": "Pending", 
                                "quantity": "19"
                            },{ "date": "/Date(1530144000000+0530)/",
                                "status": "1", 
                                "description": "in Process", 
                                "quantity": "13"
                            },{ "date": "/Date(1530144000000+0530)/",
                                "status": "2", 
                                "description": "Pending", 
                                "quantity": "19"
                            }
                        ],
                        "leadSLA": [],
                        "leadStatus": [
                            { "date": "/Date(1530144000000+0530)/",
                              "status": "1", 
                              "description": "test 01", 
                                "quantity": 13
                            },{ "date": "/Date(1530144000000+0530)/",
                                "status": "2", 
                                "description": "test 02", 
                                "quantity": 19
                            },{ "date": "/Date(1530144000000+0530)/",
                            "status": "3", 
                            "description": "test 03", 
                            "quantity": 3
                            },{ "date": "/Date(1530144000000+0530)/",
                            "status": "4", 
                            "description": "test 04", 
                            "quantity": 23
                            }
                        ],
                        "meetingByBrand": [],
                        "leadByResponsible": [],
                        "meetingBySalesman": []
                    }
                ); 

                
                this.setModel(oFakeData, "fakeModel");

                console.log(JSON.stringify(oFakeData.getData()));

                
            }
        });
    }
);