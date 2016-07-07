'use strict';

angular.module('companyWorkersApp', ['ngRoute', 'ngResource', 'ngMaterial'])
    .config(['$routeProvider', '$locationProvider',
        function ($routeProvide, $locationProvider) {
            
            // routing
            $routeProvide
                    // home page (list of workers)
                    .when('/', {
                        templateUrl: 'components/list/listView.html',
                        controller: 'ListCtrl',
                        controllerAs: 'list'
                    })
                    // details page
                    .when('/worker/:workerId', {
                        templateUrl: 'components/details/detailsView.html',
                        controller: 'DetailsCtrl',
                        controllerAs: 'details'
                    })
                    .otherwise({
                        redirectTo: '/'
                    });

            // enable support of history.pushState to change urls      
            $locationProvider.html5Mode(true);

        }]);