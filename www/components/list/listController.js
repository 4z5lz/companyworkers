'use strict';

angular.module('companyWorkersApp')
    .controller('ListCtrl', ['$location', 'WorkersListApi', function ($location, Api) {

        // Load list of workers
        Api.query(function (data) {
            this.workers = data;
        }.bind(this));

        this.goToWorkerDetails = function (id) {
            $location.path("/worker/" + id);
        };

    }]);