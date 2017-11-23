export default function accountCtrl($scope, $state) {
    this.accounts = null;

    $scope.clickHandler = function() {
        $state.go('app.personnalInfo');
        // $window.location.href = "/personnalinfo";
        console.log("je suis dans le controlleur account");

    }

}