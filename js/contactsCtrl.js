var app = angular.module('app');

app.controller('contactsCtrl', [
	'$scope',
	'configFactory',
	function($scope, configFactory) {
		$scope.initMap = function() {
			var point = new google.maps.LatLng(55.433334, 37.545649);

            var map = new google.maps.Map(document.getElementById('map'), {
                zoom: 15,
                scrollwheel: false,
                navigationControl: true,
                mapTypeControl: false,
                scaleControl: false,
                draggable: true,
                center: point
           });

           new google.maps.Marker({
               position: point,
               map: map
           });
		}
	}
]);