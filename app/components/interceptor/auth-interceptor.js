'use strict';

authInterceptor.$inject = ['$rootScope', '$state', '$q', '$location', '$localStorage', '$sessionStorage'];
export function authInterceptor($rootScope, $state, $q, $location, $localStorage, $sessionStorage) {
    var service = {
        request: request
    };

    return service;

    function request(config) {
        if (!config || !config.url || /^http/.test(config.url)) return config;

        /*jshint camelcase: false */
        config.headers = config.headers || {};
        var token = $localStorage.authenticationToken || $sessionStorage.authenticationToken;
        if (token) {
            config.headers.Authorization = 'Bearer ' + token;
        }
    
        return config;
    }
}