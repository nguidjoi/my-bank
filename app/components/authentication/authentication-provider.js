   'use strict';

   authServerProvider.$inject = ['$http', '$localStorage', '$sessionStorage', '$q'];

   export function authServerProvider($http, $localStorage, $sessionStorage, $q) {
       var service = {
           getToken: getToken,
           login: login,
           loginWithToken: loginWithToken,
           storeAuthenticationToken: storeAuthenticationToken,
           logout: logout
       };

       return service;

       function getToken() {
           return $localStorage.authenticationToken || $sessionStorage.authenticationToken;
       }

       function login(credentials) {

           var data = {
               username: credentials.username,
               password: credentials.password,
               rememberMe: credentials.rememberMe
           };

           const url = 'http://localhost:8080/api/authenticate';
           return $http.post(url, data).success(authenticateSuccess);

           function authenticateSuccess(data, status, headers) {
               var bearerToken = headers('Authorization');
               if (angular.isDefined(bearerToken) && bearerToken.slice(0, 7) === 'Bearer ') {
                   var jwt = bearerToken.slice(7, bearerToken.length);
                   console.log(" in auth" + jwt);
                   console.dir(headers);
                   service.storeAuthenticationToken(jwt, credentials.rememberMe);
                   return jwt;
               }
           }
       }

       function loginWithToken(jwt, rememberMe) {
           var deferred = $q.defer();

           if (angular.isDefined(jwt)) {
               this.storeAuthenticationToken(jwt, rememberMe);
               deferred.resolve(jwt);
           } else {
               deferred.reject();
           }

           return deferred.promise;
       }

       function storeAuthenticationToken(jwt, rememberMe) {
           if (rememberMe) {
               $localStorage.authenticationToken = jwt;
           } else {
               $sessionStorage.authenticationToken = jwt;
           }
       }

       function logout() {
           delete $localStorage.authenticationToken;
           delete $sessionStorage.authenticationToken;
       }
   }