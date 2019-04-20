sap.ui.define([
			"sap/ui/core/mvc/Controller",
			"sap/ui/core/UIComponent",
			"sap/ui/core/routing/History"
		], function (Controller, UIComponent, History) {
			"use strict";

			return Controller.extend("opensap.myapp.controller.Supplier", {
				
				onInit: function () {
					var oRouter = UIComponent.getRouterFor(this);
					oRouter.getRoute("supplier").attachPatternMatched(this._onObjectMatched, this);
				},
		
				_onObjectMatched: function (oEvent) {
					this.getView().bindElement({
						path: "/" + oEvent.getParameter("arguments").productPath,
						model: "products"
					});
				},
				
				onNavBack: function () {
					var oHistory = History.getInstance();
					var sPreviousHash = oHistory.getPreviousHash();
		
					if (sPreviousHash !== undefined) {
						window.history.go(-1);
					} else {
						var oRouter = UIComponent.getRouterFor(this);
						oRouter.navTo("overview", {}, true);
					}
				}
			
			});
	});