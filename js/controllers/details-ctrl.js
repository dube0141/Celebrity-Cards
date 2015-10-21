angular.module('Celebrities')

.controller('DetailsCtrl', function ($scope, $routeParams, Items) {
	$scope.itemId = $routeParams.itemID;
	$scope.item = {}

	Items.getOne($scope.itemId)
		.then(success, error);

	function success(response) {
		var items = response.data.items;
		items.forEach(function (i) {
			if (i.id == $routeParams.itemID) {
				$scope.item = i;
			}
		});
	}

	function error(response) {
		alert("Data could not be loaded!");
	}

});