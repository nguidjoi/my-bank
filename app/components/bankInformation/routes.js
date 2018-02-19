export default function bankConfig($stateProvider) {

    //$urlRouterProvider.when('', '/authentication');

    // Now set up the states
    $stateProvider
        .state('app.bank', {
            url: 'bank',
            views: {
                'bankInformation@app': {
                    templateUrl: 'components/bankInformation/bankInformation.html',
                    controller: 'bankCtrl',
                    controllerAs: 'vm'
                }
            },
            resolve: {
                    translatePartialLoader: ['$translate', '$translatePartialLoader', function ($translate, $translatePartialLoader) {
                        $translatePartialLoader.addPart('bank');
                        return $translate.refresh();
                    }]
            }
        });

}