(function(window, angular, undefined){

	'use strict';

	function todoListHelperService(){
		var self = this;
		self.edit = edit;
		self.remove = remove;
		self.save = save;
		self.addSubItem = addSubItem;

		function edit(item){ 
			item.edit = true;
			return false;
		};

		function save(item){ 
			item.edit = false;
			return true;
		};

		function remove(item, addEnabled){
			return true;
		};

		function addSubItem(item){
			if(!item.subItems) 
				item.subItems = [];
			item.subItems.push({Id: Math.random(), Name: 'Sub Item', ParentId: item.Id});
		}
	};

	todoListHelperService.$inject = [];

	angular.module('todoApp').service('todoListHelperService', todoListHelperService)
})(window, window.angular);