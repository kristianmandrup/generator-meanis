angular.module('mean.system').controller('IndexController', ['$scope', '$socket', 'Global', function ($scope, $socket, Global) {
    $scope.global = Global;

    $scope.hello = 'Hello to AngularJS';

	//angular service with socket.io
	$socket.on("test/another/event", function(data){
		$scope.data = data;
	});
	//angular service with socket.io
	$socket.emit("test/event", $scope.hello);
}]);