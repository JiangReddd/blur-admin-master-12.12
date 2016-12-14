/**
 * @author a.demeshko
 * created on 28.12.2015
 */
(function() {
	'use strict';

	angular.module('BlurAdmin.pages.accumulation.grouprank')
		.controller('groupPartCtrl', groupPartCtrl);

	/** @ngInject */
	function groupPartCtrl($scope,$stateParams,$http) {
		var vm = this;
		$http.get('app/pages/accumulation/grouprank/grouprank.json').then(function(res) {
			var messages = res.data.sort(function(a, b) {
				if (a.date > b.date) return 1;
				if (a.date < b.date) return -1;
			}).reverse();
			vm.messages = messages;
			// vm.getMessageById = function(id) {
			//   return messages.filter(function(m) {
			//     return m.id == id;
			//   })[0];
			// };
			//     
			vm.label = $stateParams.label;
		});
	}
})();