sap.ui.define([
			"sap/ui/core/mvc/Controller",
			"sap/m/MessageToast"
		], function (Controller, MessageToast) {
			"use strict";

			return Controller.extend("opensap.myapp.controller.Products", {
				
				onShowSupplier: function(oEvent) {
					var oItem = oEvent.getSource();
					var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
					oRouter.navTo("supplier", {
						productPath: oItem.getBindingContext("products").getPath().substr(1)
					});
				}
			});
	});