/**
 * @author v.lugovksy
 * created on 16.12.2015
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.accumulation.grouprank')
      .directive('groupAll', groupAll);

  /** @ngInject */
  function groupAll() {
    return {
      restrict: 'E',
      controller: 'groupAllCtrl',
      templateUrl: 'app/pages/accumulation/grouprank/groupAll/groupAll.html'
    };
  }
})();