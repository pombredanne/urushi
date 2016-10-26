require.config(requireConfig);
require(['Urushi', 'templateEngine', 'templateConfig'], function(Urushi, templateEngine, templateConfig) {
	'use strict';

	templateEngine.renderDocument(document.body, templateConfig).then(function(result) {
		result.widgets.hamburger.setCallback(function () {
			document.getElementById('demo-slide-underlay').classList.add('show');
			document.getElementById('demo-slide-menu').classList.add('show');
		});

		Urushi.addEvent(document.getElementById('demo-slide-underlay'), 'click', this, function () {
			document.getElementById('demo-slide-underlay').classList.remove('show');
			document.getElementById('demo-slide-menu').classList.remove('show');
			result.widgets.hamburger.transform(false);
		});

		return result;
	}).then(function (result) {
		var modules = result.widgets;
		Urushi.addEvent(
			modules.button1.getRootNode(),
			'click',
			modules.button1, function() {
				modules.dialog1.show();
			}
		);
		Urushi.addEvent(
			modules.button2.getRootNode(),
			'click',
			modules.button2, function() {
				modules.dialog2.show();
			}
		);
	}).then(function () {
		document.getElementById('loading-pane').classList.add('close');
	});
});