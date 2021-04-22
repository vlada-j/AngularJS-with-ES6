angular.module('myApp').controller('rootCtrl', rootCtrl)

rootCtrl.$inject = ['$rootScope']
function rootCtrl($rootScope) {
	$rootScope.test = 'Test text'
	$rootScope.testProp = 'Some property from outside'
	$rootScope.customer = {
		name: 'Naomi',
		address: '1600 Amphitheatre'
	}
}
