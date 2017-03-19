(function(window, angular, undefined){

	'use strict';

	function todoAPIService(){
		var self = this;
		self.remove = remove;
		self.save = save;
		self.addSubItem = addSubItem;

		//TODO URL is going to be something else (API URL)
		var url = '';

		function getList(){
			return $http.get(url)
		}

		function remove(model){
			return $http.delete(url);
		};

		function save(model){
			return $http.delete(url);
		};
	};

	todoAPIService.$inject = [];

	angular.module('todoApp').service('todoAPIService', todoAPIService)
})(window, window.angular);