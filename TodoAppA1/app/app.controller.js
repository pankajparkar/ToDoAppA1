(function(window, angular, undefined){
	angular.module('todoApp').controller('MainAppController', MainAppController)

	MainAppController.$inject = [];

	function MainAppController(){
		var main = this;
		main.addEnable = true;
		main.editEnable = false;
		main.changeAddEnable = changeAddEnable;
		main.changeEditEnable = changeEditEnable;
		main.list = [];


		for(var i=0; i< 4;i++){
			main.list.push({Id: Math.random(), Name: 'Test'});
		}

		function changeAddEnable() { }
		function changeEditEnable() { }

	}
})(window, window.angular);