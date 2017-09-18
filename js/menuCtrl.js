var app = angular.module('app')

app.controller('menuCtrl', [
	'$scope',
	'configFactory',
	function($scope, configFactory) {
		configFactory.get(function(config) {
			$scope.menuItems = config.menuItems; 
			$scope.logo = config.projectInfo.logo;

			$scope.$apply(); 
		});
	}
]);
