angular.module('Celebrities')

.controller('MainCtrl', function ($scope, $http) {
	$http({
			method: 'GET',
			url: 'data/items.json'
		})
		.then(success, error);

	function success(response) {
		$scope.allData = response.data;
	}

	function error(response) {
		alert("Data could not be loaded!");
	}
});