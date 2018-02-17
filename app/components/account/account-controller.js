export default function accountCtrl($scope, $state) {
    this.accounts = null;

    $scope.clickHandler = function() {
        $state.go('app.personnalInfo');
    }

}