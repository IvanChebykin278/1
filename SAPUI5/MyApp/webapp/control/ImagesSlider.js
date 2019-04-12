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
		renderer : function (oRm, oControl) {
			var numberOfImages = oControl.getImages().length;
			
			oRm.write("<div"); 
        	oRm.writeControlData(oControl);
			oRm.write(">");
			
			oRm.write("<figure");
			oRm.write(">");
			
			for(var i = 0; i < numberOfImages; i++) {
				oRm.write("<figure");
				oRm.write(">");
				
				oRm.write("<img>");
				
				oRm.write("<figcaption");
				oRm.write(">");
				oRm.write("");
				oRm.write("</figcaption>");
				
				oRm.write("</figure>");
			}
			
			oRm.write("</figure>");
			oRm.write("<div>");
		}
	});
});