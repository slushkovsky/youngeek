var app = angular.module('app')

app.filter('trusted', ['$sce', function ($sce) { return function(url) { return $sce.trustAsResourceUrl(url); }; }]);

app.directive('benefit', function() {
	return { 
		restrict: 'E', 
		template: '<div class="icon-bg"><img src="{{ icon }}" /></div><p class="name">{{ name }}</p><p class="descr">{{ descr }}</p>',
		scope: {
			icon: '=', 
			name: '=',
			descr: '='
		}
	}
})

app.directive('tutor', function() {
	return {
		restrict: 'E', 
		template: '<img src="{{ img }}"/><p class="name">{{ name }}</p><p class="title">{{ title }}</p>',
		scope: {
			img: '=',
			name: '=',
			title: '='
		}
	}
})

app.directive('partner', function() {
	return {
		restrict: 'E', 
		template: '<img src="{{ img }}" />',
		scope: {
			img: '='
		}
	}
})

app.controller('homeCtrl', [
	'$scope',
	'configFactory',
	function($scope, configFactory) {
		configFactory.get(function(config) {
			$scope.tutors = config.tutors;
			$scope.benefits = config.benefits;
			$scope.partners = config.partners;
			$scope.projectInfo = config.projectInfo;

			$scope.$apply();
		});

	 ;
		new Flickity(document.querySelector('.carousel'), {
			autoPlay: 4000,
			pauseAutoPlayOnHover: false,
			imagesLoaded: true, 
			lazyLoad: 1,
			initialIndex: 2,
			prevNextButtons: false,
			pageDots: false
			// percentPosition: false
		});

		$scope.headerImg = 'https://emmer.house.gov/sites/emmer.house.gov/files/styles/congress_featured_image/public/featured_image/issues/Education-OpportunitySmall.jpg?itok=ef60voqr';

		$scope.seo = {
			home: {
				title: 'Youngeek',
				h1: 'Центр цифровых технологий Youngeek - город Подольск'
			}
		}
	}
]);