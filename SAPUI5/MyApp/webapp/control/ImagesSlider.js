sap.ui.define([
	"sap/ui/core/Control"
], function (Control) {
	"use strict";
	return Control.extend("opensap.myapp.control.ImagesSlider", {
		metadata : {
			properties: {
				images: {type: "object[]", defaultValue: [{}]},
				width: {type: "sap.ui.core.CSSSize", defaultValue: "100%"},
				height: {type: "sap.ui.core.CSSSize", defaultValue: "auto"},
				slideScrollingTime: {type: "float", defaultValue: 5}
			}
		},
		init : function () {
			
		},
		renderer : function (oRM, oControl) {
			
		}
	});
});