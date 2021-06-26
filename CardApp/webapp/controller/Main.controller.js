sap.ui.define([
        "sap/ui/core/mvc/Controller",
        "sap/ui/model/json/JSONModel"
	],
	/**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
	function (Controller,JSONModel) {
		"use strict";

		return Controller.extend("solex.CardApp.controller.Main", {
			onInit: function () {
			var odata = this.getData();
			var oProductsModel = new JSONModel(odata);

			this.getView().setModel(oProductsModel, "products");
		},
		getData: function () {
			var data = {
				"productItems": [{
					"title": "GLA-20Q2",
					"subtitle": "cloud-00000000014-target",
					"revenue": "Active",
					"status": "success",
					"statusSchema": "Success",
					"LandscapeUUID" : "guid'000d3a28-2281-1eea-9fc6-1c74aa09539c'"
				}, {
					"title": "GSA",
					"subtitle": "cloud-00000000004-target",
					"revenue": "Active",
					"status": "success",
					"statusSchema": "Success",
					"LandscapeUUID" : "guid'000d3a28-2281-1eda-8880-ac26d949c59a'"
				}, {
					"title": "GTA",
					"subtitle": "cloud-00000000003-target",
					"revenue": "Active",
					"status": "success",
					"statusSchema": "Success",
					"LandscapeUUID" : "guid'000d3a2a-dd76-1eda-8ca5-25fc0c42a3de'"
				}]
			};
			return data;
		},
		onHeaderPress : function(){
			var win = window.open('https://portal.demo-education.cloud.sap/sites/sdc#MyLandscape-display', '_blank');
			if (win) {
			    //Browser has allowed it to be opened
			    win.focus();
			} else {
			    //Browser has blocked it
			    alert('Please allow popups for this website');
			}
					},
					
		onListItemPress : function(oEvt) {
			debugger;
			var sPath = oEvt.getSource().getBindingContextPath();
			var odata = this.getView().getModel("products").getProperty(sPath);
			var url = "https://portal.demo-education.cloud.sap/sites/sdc#cpsecuredemo-Access?LandscapeUUID=" + odata.LandscapeUUID;
			var win = window.open(url, '_blank');
			if (win) {
			    //Browser has allowed it to be opened
			    win.focus();
			} else {
			    //Browser has blocked it
			    alert('Please allow popups for this website');
			}
		}
		});
	});
