'use strict';

angular.module('companyWorkersApp')
    .controller('DetailsCtrl', ['$routeParams', '$location', 'WorkersDetailsApi', function ($routeParams, $location, Api) {

        this.data = {};

        Api.get({
            id: $routeParams.workerId
        },
        function (data) {
            this.data = data[0];
        }.bind(this));
        
        this.back = function () {
            $location.path("/");
        };

    }]);