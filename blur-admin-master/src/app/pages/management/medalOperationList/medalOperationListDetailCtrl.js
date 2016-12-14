/**
 * @author a.demeshko
 * created on 28.12.2015
 */
(function() {
	'use strict';

	angular.module('BlurAdmin.pages.management.medalOperationList')
		.controller('medalOperationListDetailCtrl', medalOperationListDetailCtrl);

	/** @ngInject */
	function medalOperationListDetailCtrl($http,$stateParams) {
		var vm = this;
		$http.get('app/pages/management/medalOperationList/medalOperationList.json').then(function(res) {
			var messages = res.data.sort(function(a, b) {
				if (a.id > b.id) return 1;
				if (a.id < b.id) return -1;
			}).reverse();
			vm.mail = messages.filter(function(m) {
				return m.id == $stateParams.id;
			})[0];   
		});
		vm.label = $stateParams.label;
	}
})();