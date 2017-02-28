(function(window, angular, undefined){
	angular.module('todoApp').component('mainApp', {
		templateUrl: '/app/app.component.html',
		controller: 'MainAppController',
		controllerAs: 'main'
	})
})(window, window.angular);