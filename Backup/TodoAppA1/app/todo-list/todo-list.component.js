﻿(function(window, angular, undefined){
	angular.module('todoApp').component('todoList', {
		bindings: {
			items: '<',
			addEnable: '<',
			editEnable: '<',
			changeAddEnabled: '&',
			changeEditEnabled: '&'
		},
		templateUrl: '/app/todo-list/todo-list.component.html',
		controller: 'TodoListController',
		controllerAs: 'todoList'
	})
})(window, window.angular);