'use strict';

authExpiredInterceptor.$inject = ['$rootScope', '$q', '$injector', '$localStorage', '$sessionStorage'];

export function authExpiredInterceptor($rootScope, $q, $injector, $localStorage, $sessionStorage) {
    var service = {
        responseError: responseError
    };

    return service;

    function responseError(response) {
        if (response.status === 401) {
            delete $localStorage.authenticationToken;
            delete $sessionStorage.authenticationToken;

        }

        return $q.reject(response);
    }
}