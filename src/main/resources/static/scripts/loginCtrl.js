app.controller("loginCtrl", function($scope,$http,$location) {
    $scope.login = function(){
        //send credentials to server
        //on success, navigate to main.
        $location.path("/task");
    }
});