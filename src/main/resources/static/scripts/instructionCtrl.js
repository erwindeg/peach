app.controller("instructionCtrl", function($scope,$http,$location) {
    $scope.start = function(){
        $location.path("/story/1");
    }
});