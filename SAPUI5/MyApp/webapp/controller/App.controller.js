sap.ui.define([
			"sap/ui/core/mvc/Controller"
		], function (Controller) {
			"use strict";

			return Controller.extend("opensap.myapp.controller.App", {
				onSliderMoved: function (oEvent) {
					var value = oEvent.getParameter("value");
					this.byId("panelForGridList").setWidth(value + "%");
				}
			});
	});



