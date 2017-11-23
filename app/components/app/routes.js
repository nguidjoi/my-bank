'use strict';

module.exports = AppConfig;

function AppConfig($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/');

    // Now set up the states
    $stateProvider
        .state('app', {
            url: '/',
            templateUrl: 'components/app/app.html'
        });

}