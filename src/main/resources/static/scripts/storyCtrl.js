app.controller("storyCtrl", function($scope,$http,$location,$routeParams) {
    $scope.story=$routeParams.id;
});