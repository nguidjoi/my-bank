'use strict';

authenticationSrv.$inject = ['$http'];

export default function authenticationSrv($http) {
    var service = {};

    service.login = login;

    return service;

    function login({ username: username, password: password }) {
        var result = null;

        $http.post('http://localhost:8080/api/authenticate', { username: username, password: password, rememberMe: true }, function(response) {

            result = response;
        });
        console.log(result)
        return result;
    }

}