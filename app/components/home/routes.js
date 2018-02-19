export default function homeConfig($stateProvider) {

    //$urlRouterProvider.when('', '/authentication');

    // Now set up the states
    $stateProvider
        .state('app.home', {
            url: 'index',
            views: {
                'home@app': {
                    templateUrl: 'components/home/home.html',
                    controller: 'homeCtrl',
                    controllerAs: 'vm'
                }
            },
            resolve: {
                    translatePartialLoader: ['$translate', '$translatePartialLoader', function ($translate, $translatePartialLoader) {
                        $translatePartialLoader.addPart('home');
                        return $translate.refresh();
                    }]
            }
        });

}