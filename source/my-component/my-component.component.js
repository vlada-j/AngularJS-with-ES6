angular
	.module('myApp')
	.component('myComponent', {
		// template: '<p>My Component: {{$ctrl.zx}}</p>',
		templateUrl: 'my-component/my-component.html',
		bindings: {
			myProp: '='
		},
		controllerAs: 'vm',
		controller: myComponentCtrl,
	})

myComponentCtrl.$inject = ['$rootScope'];
function myComponentCtrl($rootScope) {
	console.log('Component ctrl myComponent', $rootScope);
	var vm = this;
	this.zx = 789
	this.clickTest=function(v){
		vm.zx += v;
		console.log(v);
	}
}

console.log('myComponent ????');
