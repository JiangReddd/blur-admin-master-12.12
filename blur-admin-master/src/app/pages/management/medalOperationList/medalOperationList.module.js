/**
 * @author v.lugovsky
 * created on 16.12.2015
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.management.medalOperationList', [])
    .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider,$urlRouterProvider) {
    $stateProvider
        .state('management.medalOperationList', {
          url: '/medalOperationList',
          abstract: true,
          templateUrl: 'app/pages/management/medalOperationList/medalOperationList.html',
          title: '勋章操作列表',
          sidebarMeta: {
            order: 0,
          },
        }).state('management.medalOperationList.list', {
          url: '/list',
          templateUrl: 'app/pages/management/medalOperationList/medalOperationList1.html',
          controller:'medalOperationListCtrl',
          title: '综合排行榜 - 个人排行榜',
        }).state('management.medalOperationList.modify', {
          url: '/modify/:id/:age',
          templateUrl: 'app/pages/management/medalOperationList/medalOperationList2.html',
          controller:'medalOperationListDetailCtrl',
          controllerAs:'detailCtrl',
          title: '综合排行榜 - 个人排行榜',
        });
    $urlRouterProvider.when('/management/medalOperationList','/management/medalOperationList/list');
  }

})();
