/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"solex/CardApp/test/integration/AllJourneys"
	], function () {
		QUnit.start();
	});
});
