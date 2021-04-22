import ClassA from "./shared/ClassA";
import ClassB from "./shared/ClassB";

const a = new ClassA('Marko')
console.log(a.hello(), a.hello() === "ClassA say: My name is MARKO and I say \"Hello\".")
console.log(a.value, a.value === 5)
console.log(a.name, a.name === "MARKO")
console.log(ClassA.SOME_VALUE, ClassA.SOME_VALUE === 123456789)
a.value = 10
console.log(a.value, a.value === 10)

const b = new ClassB('Andrej')
console.log(ClassB.PI, ClassB.PI === 3.141592653589793)
console.log(ClassB.SOME_VALUE, ClassB.SOME_VALUE === 123456789)
console.log(b.name, b.name === "andrej")
b.name = 787899
console.log(b.name, b.name === "andrej")
console.log(b.hello(), b.hello() === "ClassB say: My name is andrej and I say \"Hello\". To all world.")
console.log(b.radius(10), b.radius(10) === 62.83185307179586)
ClassB.SOME_VALUE = 5
console.log(ClassB.SOME_VALUE, ClassB.SOME_VALUE === 5)

window.testApp = {
	a,
	b
}

console.log('MAIN')

const funk = n => n * 5;

console.log( funk(6) );




import './app';
import './rootCtrl';
import './my-component/my-component.component';
