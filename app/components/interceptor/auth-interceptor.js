'use strict';

authInterceptor.$inject = ['$rootScope', '$q', '$location', '$localStorage', '$sessionStorage'];
export function authInterceptor($rootScope, $q, $location, $localStorage, $sessionStorage) {
    var service = {
        request: request
    };

    return service;

    function request(config) {
        //if (!config || !config.url || /^http/.test(config.url)) return config;
        console.log('authInterceptor');
        /*jshint camelcase: false */
        config.headers = config.headers || {};
        var token = $localStorage.authenticationToken || $sessionStorage.authenticationToken;
        if (token) {
            console.log('authInterceptor find token');
            config.headers.Authorization = 'Bearer ' + token;
        }

        return config;
    }
}