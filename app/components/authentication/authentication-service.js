'use strict';

authenticationSrv.$inject = ['$http'];

export default function authenticationSrv($http) {
    var service = {};

    service.login = login;

    return service;

    function login({ username: username, password: password }) {
        var result = null;

        const url = 'http: //localhost:8080/api/authenticate';
        const data = {
            username: username,
            password: password,
            rememberMe: true
        }


        return $http.post(url, data).then(function(response) {
            console.log('Success');
            console.dir(response);
            return response;
        }, function(response) {
            console.log('Error');
            console.dir(response);
            return response;
        });


    }

}