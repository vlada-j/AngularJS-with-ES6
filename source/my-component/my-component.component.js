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
	this.zx = 789
}

console.log('myComponent ????');
