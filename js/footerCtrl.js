var app = angular.module('app')

app.directive('socialBtn', function() {
	return {
		restrict: 'E',
		template: '<a href="{{ href }}" class="icon-bg"><img src="{{ icon }}" /></a>',
		scope: {
			href: '=', 
			icon: '='
		} 
	}
}) 

app.controller('footerCtrl', [
	'$scope',
	'configFactory',
	function($scope, configFactory) {
		configFactory.get(function(config) {
			$scope.socials = config.socials; 
			$scope.contacts = config.contacts;

			$scope.$apply(); 
		});
	}
]);
