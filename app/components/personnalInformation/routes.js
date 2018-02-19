export default function personnalInformationConfig($stateProvider) {
    // Now set up the states
    $stateProvider
        .state('app.personnalInfo', {
            url: 'personnalInfo',
            views: {
                'personnalInformation@app': {
                    templateUrl: 'components/personnalInformation/personnalInformation.html',
                    controller: 'personnalInformationCtrl',
                    controllerAs: 'vm'
                }
            },
            resolve: {
                    translatePartialLoader: ['$translate', '$translatePartialLoader', function ($translate, $translatePartialLoader) {
                        $translatePartialLoader.addPart('personnalInfo');
                        return $translate.refresh();
                }]
            }
        });
}