System.register(['./generated-shared.js'], function (exports) {
	'use strict';
	var d;
	return {
		setters: [function (module) {
			d = module.d;
		}],
		execute: function () {

			var main1 = exports('default', d.map(d => d + 1));

		}
	};
});
