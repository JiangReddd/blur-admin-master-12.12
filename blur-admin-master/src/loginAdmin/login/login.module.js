/**
 * @author v.lugovsky
 * created on 16.12.2015
 */
(function() {
  'use strict';

  angular.module('loginAdmin.login', [
    ])
  // .config()
  .controller('test',['$scope','$http',function($scope,$http,$rootScope) {  

var _http=$http;
  $scope.login = function() {
    
    var headers = {
      authorization : "Basic "
          + btoa($scope.credentials.username + ":"
              + $scope.credentials.password)
    };
    console.log(headers);



/*    _http.get('loginAdmin/login/login.json', {headers : headers}).then(function(response) {
      alert("1");
      location.href="/dashboard";
    });*/

/*    _http.post('',{
        username:$scope.credentials.username,
        password:$scope.credentials.password
    }).success(function(){
                window.location.href = "/dashboard";
            });*/



  };



}]
  );

  /** @ngInject */
  // function routeConfig($routeProvider) {
  //   $routeProvider.when('/auth.html', {
  //     templateUrl : 'auth.html',
  //     controller : 'test',
  //     controllerAs : 'test'
  //   })
  // }


})();