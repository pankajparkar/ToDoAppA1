(function(window, angular, undefined){
	angular.module('todoApp').controller('TodoItemController', TodoItemController)

	TodoItemController.$inject = [];

	function TodoItemController(){
		var todoItem = this;
		todoItem.addSubItem = addSubItem;

		function addSubItem(item){
			if(!item.subItems) 
				item.subItems = [];
			item.subItems.push({Id: Math.random(), Name: 'Sub Item', ParentId: item.Id});
		}
	}
})(window, window.angular);