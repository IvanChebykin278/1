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
			var slideScrollingTime = oControl.getSlideScrollingTime();
			var sliderScrollingTime = slideScrollingTime * numberOfImages;
			
			oRm.write("<div"); 
        	oRm.writeControlData(oControl);
        	oRm.addStyle("width", oControl.getWidth());
        	oRm.addClass("captionedGallery");
        	oRm.writeClasses();
        	oRm.writeStyles();
			oRm.write(">");
			
			oRm.write("<figure");
			oRm.addStyle("width", 100 * numberOfImages + "%");
			oRm.addStyle("animation-duration", sliderScrollingTime + "s, " + slideScrollingTime + "s");
			oRm.addStyle("animation-timing-function", "steps(" + numberOfImages + ", end), ease-in-out");
        	oRm.addClass("slider");
        	oRm.addClass("figureStyle");
        	oRm.writeClasses();
        	oRm.writeStyles();
			oRm.write(">");
			
			for(var i = 0; i < numberOfImages; i++) {
				oRm.write("<figure");
				oRm.addStyle("width", 100 / numberOfImages + "%");
				oRm.addClass("pageContainer");
				oRm.addClass("figureStyle");
				oRm.writeClasses();
        		oRm.writeStyles();
				oRm.write(">");
				
				oRm.write("<img ");
				oRm.addClass("imgStyle");
				oRm.write("src=\"" + oControl.getImages()[i].url + "\"");
				oRm.write("alt=\"" + oControl.getImages()[i].alt + "\"");
				oRm.writeClasses();
				oRm.write(">");
				
				oRm.write("<figcaption");
				oRm.addClass("captionStyle");
				oRm.writeClasses();
				oRm.write(">");
				oRm.write(oControl.getImages()[i].alt);
				oRm.write("</figcaption>");
				
				oRm.write("</figure>");
			}
			
			oRm.write("</figure>");
			oRm.write("</div>");
		}
	});
});