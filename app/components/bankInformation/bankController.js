export default function bankCtrl($scope, $state) {

    $scope.clickHandler = function() {
        //$state.go('app.personnalInfo');
        // $window.location.href = "/personnalinfo";
        console.log("je suis dans le controlleur info bank");
    }
}