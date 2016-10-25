app.controller("candidateCtrl", function($scope,$http,$location,$localStorage) {
    $scope.candidate =  $localStorage.candidate;
    if ( $scope.candidate == null ||  $scope.candidate === undefined) {
         $scope.candidate ={};
    }

    $scope.setGender = function(gender){
        $scope.candidate.gender = gender;
    }

     $scope.save = function(){
            $localStorage.candidate = $scope.candidate;
            $location.path("/instruction");
     }
});