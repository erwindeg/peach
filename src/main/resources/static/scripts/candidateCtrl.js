app.controller("candidateCtrl", function($scope,$http,$location,$localStorage, candidateService) {
    $scope.candidate = candidateService.get();

    $scope.setGender = function(gender){
        $scope.candidate.gender = gender;
    }

     $scope.save = function(){
         candidateService.save($scope.candidate);
         $location.path("/instruction");
     }
});


app.controller("candidateInfoCtrl", function($scope,$http,$location,$localStorage, candidateService) {
     $scope.candidate = candidateService.get();
     $scope.$on('candidate:updated', function(event,data) {
        $scope.candidate = candidateService.get();
     });
});
