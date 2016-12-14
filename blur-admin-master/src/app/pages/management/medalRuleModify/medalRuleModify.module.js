/**
 * @author v.lugovsky
 * created on 16.12.2015
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.management.medalRuleModify', [])
      .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider) {
    $stateProvider
        .state('management.medalRuleModify', {
          url: '/medalRuleModify',
          templateUrl: 'app/pages/management/medalRuleModify/medalRuleModify.html',
          title: '勋章规则修改',
          sidebarMeta: {
            icon: 'ion-android-home',
            order: 0,
          },
        });
  }

})();