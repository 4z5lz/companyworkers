'use strict';

// access to restful api
angular.module('companyWorkersApp')
    .factory('WorkersListApi', ['$resource', function ($resource) {

        return $resource('api/:action', {}, {
            query: {method: 'GET', params: {action: 'all'}, isArray: true}
        });

    }]);