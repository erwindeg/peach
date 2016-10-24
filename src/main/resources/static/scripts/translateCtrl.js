app.controller('translateCtrl', function($translate, $scope) {
    $scope.showLanguageList = false;
	$scope.changeLanguage = function(langKey) {
		$translate.use(langKey);
		$scope.selectedLanguage = $translate.proposedLanguage() || $translate.use();
		$scope.showLanguageList = false;
	};
	$scope.selectedLanguage = $translate.proposedLanguage() || $translate.use();
});