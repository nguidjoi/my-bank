export default function personnalInformationCtrl($scope, $state) {

    $scope.clickHandler = function() {
        $state.go('app.bank');
        // $window.location.href = "/personnalinfo";
        console.log("je suis dans le controlleur info perso");
    }
}