'use strict';

// access to restful api
angular.module('companyWorkersApp')
    .factory('WorkersDetailsApi', ['$resource', function ($resource) {

        return $resource('api/:action/:id', {}, {
            get: {method: 'GET', params: {action: 'worker', 'id': '@id'}, isArray: true}
        });

    }]);