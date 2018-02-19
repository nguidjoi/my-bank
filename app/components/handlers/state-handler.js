    'use strict';

    stateHandler.$inject = ['$rootScope', '$state', '$sessionStorage', '$translate', 'languageService', 'translationHandler', '$window',
        'auth', 'principal', 'VERSION'];

    export function stateHandler($rootScope, $state, $sessionStorage, $translate, languageService, translationHandler, $window,
        auth, principal, VERSION) {
        return {
            initialize: initialize
        };

        function initialize() {
            $rootScope.VERSION = VERSION;

            var stateChangeStart = $rootScope.$on('$stateChangeStart', function (event, toState, toStateParams, fromState) {
                $rootScope.toState = toState;
                $rootScope.toStateParams = toStateParams;
                $rootScope.fromState = fromState;

                if (toState.external) {
                    event.preventDefault();
                    $window.open(toState.url, '_self');
                }

                if (principal.isIdentityResolved()) {
                    auth.authorize();
                }

                // Update the language
                languageService.getCurrent().then(function (language) {
                    $translate.use(language);
                });
            });

            var stateChangeSuccess = $rootScope.$on('$stateChangeSuccess',  function(event, toState, toParams, fromState, fromParams) {
                var titleKey = 'global.title' ;

                // Set the page title key to the one configured in state or use default one
                //if (toState.data.pageTitle) {
                //    titleKey = toState.data.pageTitle;
                //}
                //translationHandler.updateTitle(titleKey);
            });

            $rootScope.$on('$destroy', function () {
                if(angular.isDefined(stateChangeStart) && stateChangeStart !== null){
                    stateChangeStart();
                }
                if(angular.isDefined(stateChangeSuccess) && stateChangeSuccess !== null){
                    stateChangeSuccess();
                }
            });
        }
    }
