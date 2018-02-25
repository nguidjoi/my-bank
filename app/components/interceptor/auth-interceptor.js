'use strict';

authInterceptor.$inject = ['$rootScope', '$q', '$location', '$localStorage', '$sessionStorage'];
export function authInterceptor($rootScope, $q, $location, $localStorage, $sessionStorage) {
    var service = {
        request: request
    };

    return service;

    function request(config) {

        /*camelcase: false */
        config.headers = config.headers || {};

        var token = $localStorage.authenticationToken || $sessionStorage.authenticationToken;
        if (token) {
            config.headers.Authorization = 'Bearer ' + token;
        }

        return config;
    }
}