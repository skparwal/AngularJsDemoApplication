var app = angular.module('demo', ['ngRoute']);

app.config(['$routeProvider', function ($routeProvider) {

	$routeProvider
		// route for the index page
		.when('/', {
				templateUrl : 'partials/default.html',
				controller  : 'defaultCtrl'
		})

		// route for the About page
		.when('/about', {
			templateUrl : 'partials/about.html',
			controller  : 'aboutCtrl'
		})

		// route for the contact page
		.when('/contact', {
				templateUrl : 'partials/contact.html',
				controller  : 'contactCtrl'
		});

}]);

// create the controller and inject Angular's $scope
app.controller('defaultCtrl', function($scope) {
	// TODO: define your variables, messages. Here we are creating a variables to display in our view
	$scope.heading = 'Welcome to AngulaJs Demo Application';
  $scope.name = 'Sandeep Parwal';
  $scope.skills = ['Web Developer - ', 'Graphic Artist - ', 'User Experience Designer'];
});

app.controller('aboutCtrl', function($scope) {
	// TODO: define your variables, messages. Here we are creating a variables to display in our view
	$scope.heading = 'About Us';
  $scope.name = 'Sandeep Parwal';
  $scope.description = 'This is a free AngulaJs &amp; bootstrap demo created by Sandeep Parwal. The download includes the source files including HTML, CSS, and JavaScript.';
  $scope.messages = ["Doesn't matter who you are.", 'A Student, A Professional, A Graphic ...', 'This template is the perfect starting point!'];
});

app.controller('contactCtrl', function($scope) {
	// TODO: define your variables, messages. Here we are creating a variables to display in our view
	$scope.heading = 'Contact';
  $scope.message = 'TODO: This is a dummy form. Please configure according to your need.';
});
