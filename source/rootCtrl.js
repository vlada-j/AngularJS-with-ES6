angular.module('myApp').controller('rootCtrl', rootCtrl)

rootCtrl.$inject = ['$rootScope']
function rootCtrl($rootScope) {
	$rootScope.test = 'Test text'
	$rootScope.testProp = 'Some property from outside'
	$rootScope.customer = {
		name: 'Naomi',
		address: '1600 Amphitheatre'
	}

	$rootScope.lazyValue = []
	$rootScope.lazyLoad = function() {
		import(/*lazy*/'./lazy.js').then(m => {
			console.log('Module', m.default);
			$rootScope.lazyValue = m.default;
		})
	}
}
