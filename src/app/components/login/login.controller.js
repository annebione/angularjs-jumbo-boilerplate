'use strict';


angular
  .module('ulearn-webapp')
  .controller('LoginController', LoginController)

  LoginController.$inject = ['$rootScope', '$scope', '$window'];

  function LoginController($rootScope, $scope, $window) {

     $rootScope.$on('event', function() {

     });

  };