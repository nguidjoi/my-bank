export default function accountConfig($stateProvider) {

    //$urlRouterProvider.when('', '/authentication');

    // Now set up the states
    $stateProvider
        .state('app.account', {
            url: 'account',
            views: {
                'creation@app': {
                    templateUrl: 'components/account/account.html',
                    controller: 'accountCtrl',
                    controllerAs: 'vm'
                }
            }
        });

}