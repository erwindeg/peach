app.controller("storyCtrl", function($scope,$http,$location,$routeParams) {
    $scope.story = {};
    $scope.story.id=$routeParams.id;
    $scope.showAnswers = false;
    $scope.start = function(){
        $scope.showAnswers = true;
    }
    $scope.answer = function(){
        if($scope.story.id == '1'){
            $location.path("/break/1");
        } else {
            $location.path("/end");
        }
     }
     $scope.resume = function(){
         $location.path("/story/2");
     }
     $scope.next = function(){
         $location.path("/candidate");
     }
});