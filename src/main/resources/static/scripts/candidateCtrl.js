app.controller("candidateCtrl", function($scope,$http,$location) {
    $scope.candidate = {};
    $scope.candidate.gender = 'male';
    $scope.setGender = function(gender){
        $scope.candidate.gender = gender;
    }

     $scope.save = function(){
            //send credentials to server
            //on success, navigate to main.
            $location.path("/instruction");
     }
});