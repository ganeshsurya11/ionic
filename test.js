 
app = angular.module('todo', ['ionic'])

app.controller('appCtrl', ['$scope', function($scope){
	$scope.Title = "Intelligynt Security Service";	
}])

app.controller('tasksCtrl', ['$scope', function($scope){
	 $scope.tasks = [
		{ title: 'Collect coins' },
		{ title: 'Eat mushrooms' },
		{ title: 'Get high enough to grab the flag' },
		{ title: 'Find the Princess' },
		{ title: 'Collect coins' },
		{ title: 'Eat mushrooms' },
		{ title: 'Get high enough to grab the flag' },
		{ title: 'Find the Princess' },
		{ title: 'Collect coins' },
		{ title: 'Eat mushrooms' },
		{ title: 'Get high enough to grab the flag' },
		{ title: 'Find the Princess' },
		{ title: 'Collect coins' },
		{ title: 'Eat mushrooms' },
		{ title: 'Get high enough to grab the flag' },
		{ title: 'Find the Princess' },
		{ title: 'Collect coins' },
		{ title: 'Eat mushrooms' },
		{ title: 'Get high enough to grab the flag' },
		{ title: 'Find the Princess' },
		{ title: 'Collect coins' },
		{ title: 'Eat mushrooms' },
		{ title: 'Get high enough to grab the flag' },
		{ title: 'Find the Princess' }
  	];
}])
 






















