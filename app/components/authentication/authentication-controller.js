'use strict';
export default function authenticationCtrl($scope, authenticationSrv, $state) {


    $scope.login = function login() {
        $state.go('app.home');
    }

}