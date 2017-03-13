(function(window, angular, undefined){

	'use strict';

	function todoListHelperService(){
		var self = this;
		self.edit = edit;
		self.remove = remove;
		self.save = save;
		self.addSubItem = addSubItem;

		//TODO: move this from here to make this service less tightly couple 
		self.addEnable = true;

		function edit(item){ 
			self.addEnable = false;
			item.edit = true;
			return false;
		};

		function save(item){ 
			self.addEnable = true;
			item.edit = false;
			return true;
		};

		function remove(item, addEnable){
			//TOD: delete element from array
			self.addEnable = true;
		};

		function addSubItem(item){
			self.addEnable = false;
			if(!item.subItems) 
				item.subItems = [];
			item.subItems.push({Id: Math.random(), Name: 'Sub Item', ParentId: item.Id, edit: true});
		}
	};

	todoListHelperService.$inject = [];

	angular.module('todoApp').service('todoListHelperService', todoListHelperService)
})(window, window.angular);