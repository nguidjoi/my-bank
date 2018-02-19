'use strict';

export default function authConfig($stateProvider, $urlRouterProvider) {

    // For any unmatched url, redirect to /state1
    $urlRouterProvider.when('/', '/authentication');
    $urlRouterProvider.when('', '/authentication');

    // Now set up the states
    $stateProvider
        .state('app.authentication', {
            url: 'authentication',
            views: {
                'login@app': {
                    templateUrl: 'components/authentication/authentication.html',
                    controller: 'authenticationCtrl',
                    controllerAs: 'vm'
                }
            },
            resolve: {
                translatePartialLoader: ['$translate', '$translatePartialLoader', function ($translate,$translatePartialLoader) {
                    $translatePartialLoader.addPart('login');
                    return $translate.refresh();
                }]
            }

        });
}