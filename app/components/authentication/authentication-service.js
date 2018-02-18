   'use strict';

   auth.$inject = ['$rootScope', '$state', '$sessionStorage', '$q', '$translate', 'Principal', 'AuthServerProvider', 'Account', 'LoginService', 'Register', 'Activate', 'Password', 'PasswordResetInit', 'PasswordResetFinish'];

   function auth($rootScope, $state, $sessionStorage, $q, $translate, principal, authServerProvider, account, LoginService, register, activate, password, passwordResetInit, passwordResetFinish) {
       var service = {
           activateAccount: activateAccount,
           authorize: authorize,
           changePassword: changePassword,
           createAccount: createAccount,
           getPreviousState: getPreviousState,
           login: login,
           logout: logout,
           loginWithToken: loginWithToken,
           resetPasswordFinish: resetPasswordFinish,
           resetPasswordInit: resetPasswordInit,
           resetPreviousState: resetPreviousState,
           storePreviousState: storePreviousState,
           updateAccount: updateAccount
       };

       return service;

       function activateAccount(key, callback) {
           var cb = callback || angular.noop;

           return activate.get(key,
               function(response) {
                   return cb(response);
               },
               function(err) {
                   return cb(err);
               }.bind(this)).$promise;
       }

       function authorize(force) {
           var authReturn = principal.identity(force).then(authThen);

           return authReturn;

           function authThen() {
               var isAuthenticated = principal.isAuthenticated();

               // an authenticated user can't access to login and register pages
               if (isAuthenticated && $rootScope.toState.parent === 'account' && ($rootScope.toState.name === 'login' || $rootScope.toState.name === 'register' || $rootScope.toState.name === 'social-auth')) {
                   $state.go('home');
               }

               // recover and clear previousState after external login redirect (e.g. oauth2)
               if (isAuthenticated && !$rootScope.fromState.name && getPreviousState()) {
                   var previousState = getPreviousState();
                   resetPreviousState();
                   $state.go(previousState.name, previousState.params);
               }

           }
       }

       function changePassword(newPassword, callback) {
           var cb = callback || angular.noop;

           return password.save(newPassword, function() {
               return cb();
           }, function(err) {
               return cb(err);
           }).$promise;
       }

       function createAccount(account, callback) {
           var cb = callback || angular.noop;

           return register.save(account,
               function() {
                   return cb(account);
               },
               function(err) {
                   this.logout();
                   return cb(err);
               }.bind(this)).$promise;
       }

       function login(credentials, callback) {
           var cb = callback || angular.noop;
           var deferred = $q.defer();

           authServerProvider.login(credentials)
               .then(loginThen)
               .catch(function(err) {
                   this.logout();
                   deferred.reject(err);
                   return cb(err);
               }.bind(this));

           function loginThen(data) {
               principal.identity(true).then(function(account) {
                   // After the login the language will be changed to
                   // the language selected by the user during his registration
                   if (account !== null) {
                       $translate.use(account.langKey).then(function() {
                           $translate.refresh();
                       });
                   }
                   deferred.resolve(data);
               });
               return cb();
           }

           return deferred.promise;
       }

       function loginWithToken(jwt, rememberMe) {
           return authServerProvider.loginWithToken(jwt, rememberMe);
       }

       function logout() {
           authServerProvider.logout();
           principal.authenticate(null);
       }

       function resetPasswordFinish(keyAndPassword, callback) {
           var cb = callback || angular.noop;

           return passwordResetFinish.save(keyAndPassword, function() {
               return cb();
           }, function(err) {
               return cb(err);
           }).$promise;
       }

       function resetPasswordInit(mail, callback) {
           var cb = callback || angular.noop;

           return passwordResetInit.save(mail, function() {
               return cb();
           }, function(err) {
               return cb(err);
           }).$promise;
       }

       function updateAccount(account, callback) {
           var cb = callback || angular.noop;

           return account.save(account,
               function() {
                   return cb(account);
               },
               function(err) {
                   return cb(err);
               }.bind(this)).$promise;
       }

       function getPreviousState() {
           var previousState = $sessionStorage.previousState;
           return previousState;
       }

       function resetPreviousState() {
           delete $sessionStorage.previousState;
       }

       function storePreviousState(previousStateName, previousStateParams) {
           var previousState = { "name": previousStateName, "params": previousStateParams };
           $sessionStorage.previousState = previousState;
       }
   }