angular.module('app.state').factory('State', function ($resource) {
    
    return $resource('/state/:id');
    
});