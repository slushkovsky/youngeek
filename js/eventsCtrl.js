var app = angular.module('app')

app.directive('onFinishRender', function ($timeout) {
    return {
        restrict: 'A',
        link: function (scope, element, attr) {
            if (scope.$last === true) {
                $timeout(function () {
                    scope.$emit(attr.onFinishRender);
                });
            }
        }
    }
});

app.controller('eventsCtrl', function($scope) {
	$scope.events = [
		{
			img: 'https://pp.userapi.com/c837638/v837638925/22623/z4NQjTzZTJ0.jpg',
			title: '0',
			descr: 'Some',
			passed: false
		},
		{
			img: 'https://pp.userapi.com/c837638/v837638925/22623/z4NQjTzZTJ0.jpg',
			title: '1',
			descr: 'Some',
			passed: false
		},
		{
			img: 'https://pp.userapi.com/c837638/v837638925/22623/z4NQjTzZTJ0.jpg',
			title: '2',
			descr: 'Some',
			passed: false
		},
		{
			img: 'https://pp.userapi.com/c837638/v837638925/22623/z4NQjTzZTJ0.jpg',
			title: '3',
			descr: 'Some',
			passed: false
		},
		{
			img: 'https://pp.userapi.com/c837638/v837638925/22623/z4NQjTzZTJ0.jpg',
			title: '4',
			descr: 'Some',
			passed: true
		},
		{
			img: 'https://pp.userapi.com/c837638/v837638925/22623/z4NQjTzZTJ0.jpg',
			title: '5',
			descr: 'Some',
			passed: true
		},
		{
			img: 'https://pp.userapi.com/c837638/v837638925/22623/z4NQjTzZTJ0.jpg',
			title: '6',
			descr: 'Some',
			passed: true
		}
	]

	$scope.$on('repeatFinished', function() {
		new Flickity(document.querySelector('.carousel'), {
			// imagesLoaded: true, 
			// lazyLoad: 1,
			initialIndex: 2,
			prevNextButtons: true,
			pageDots: true
		});
	});
})