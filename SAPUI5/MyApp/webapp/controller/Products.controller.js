sap.ui.define([
			"sap/ui/core/mvc/Controller",
			"sap/m/MessageToast"
		], function (Controller, MessageToast) {
			"use strict";

			return Controller.extend("opensap.myapp.controller.Products", {
				onShowDescription: function(oEvent) {
					var oBundel = this.getView().getModel().getProperty("Description", oEvent.getSource().getBindingContext());
					MessageToast.show(oBundel);
				}
			});
	});