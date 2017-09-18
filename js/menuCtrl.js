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

		$scope.menuAnimation = undefined;
		$scope.toggleMenu = function() {
			if ($scope.menuAnimation === undefined || $scope.menuAnimation === 'close')
				$scope.menuAnimation = 'open';
			else 
				$scope.menuAnimation = 'close';
		}
	}
]);
