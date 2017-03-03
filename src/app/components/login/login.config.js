'use strict';

angular
  .module('ulearn-webapp')
  .config(loginConfig);

function loginConfig($stateProvider) {
  $stateProvider
    .state('login', {
      url: '/',
      views: {
        '': {
          templateUrl: '../templates/login.html',
          controller: 'LoginController',
          controllerAs: 'login'
        }
      }
    })
    .state('logout', {
      url: '/logout',
      redirectTo: 'login'
    });
}
