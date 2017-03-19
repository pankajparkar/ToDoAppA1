(function(window, angular, undefined){
	'use strict';

	angular.module('todoApp').controller('MainAppController', MainAppController)

	MainAppController.$inject = [];

	function MainAppController(){
		var main = this;
		main.list = [];

		for(var i=0; i< 3;i++){
			main.list.push({Id: Math.random(), Name: 'Test '+ (i+1)});
		}
	}
})(window, window.angular);