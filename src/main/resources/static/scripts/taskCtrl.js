app.controller("taskCtrl", function($scope,$http,$location) {
    $scope.candidate = {};
    $scope.candidate.gender = 'male';
    $scope.setGender = function(gender){
        $scope.candidate.gender = gender;
    }
});