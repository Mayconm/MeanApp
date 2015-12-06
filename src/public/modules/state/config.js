/**
 * 
 * @param {type} $routeProvider
 */
function Routes ($routeProvider) {    
  //List
  $routeProvider.when('/stateList', {
    templateUrl: 'views/stateList.html',
    controller: 'StateListController'
  });
  //GetById
  $routeProvider.when('/state/:id', {
    templateUrl: 'views/state.html', 
    controller: 'StateController'
  });
  //New
  $routeProvider.when('/state', {
    templateUrl: 'views/state.html',
    controller: 'StateController'
  });
}

angular.module('app.state',['app.util','ngRoute', 'ngResource']).config(Routes);
