export default function personnalInformationCtrl($scope, $state) {

    $scope.clickHandler = function() {
        $state.go('app.bank');
    }
}