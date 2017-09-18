var app = angular.module('app')

app.controller('faqCtrl', [
	'$scope',
	'configFactory',
	function($scope, configFactory) {
		$scope.faq = [
			{
				q: 'Some',
				a: 'Answer here'
			},
			{
				q: 'Some',
				a: 'Answer here'
			},
			{
				q: 'Some',
				a: 'Answer here'
			},
			{
				q: 'Some',
				a: 'Answer here'
			},
			{
				q: 'Some',
				a: 'Answer here'
			},
			{
				q: 'Some',
				a: 'Sunt ea et sit sunt eiusmod sit labore veniam in culpa tempor excepteur dolor do '
			}
		]
	}
])