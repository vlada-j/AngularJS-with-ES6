var w=Object.defineProperty;var f=(e,o,l)=>o in e?w(e,o,{enumerable:!0,configurable:!0,writable:!0,value:l}):e[o]=l;var C=(e,o,l)=>(f(e,typeof o!="symbol"?o+"":o,l),l),E=(e,o,l)=>{if(!o.has(e))throw TypeError("Cannot "+l)},a=(e,o,l)=>(E(e,o,"read from private field"),l?l.call(e):o.get(e)),c=(e,o,l,A)=>(E(e,o,"write to private field"),A?A.call(e,l):o.set(e,l),l);var r,p=class{constructor(o){r.set(this,"");c(this,r,o)}get name(){return a(this,r)}hello(){return a(this,r)?`My name is ${a(this,r)} and I say "Hello".`:"I not have name yet..."}};r=new WeakMap,C(p,"SOME_VALUE",123456789);var u=p;var m,y=class extends u{constructor(o){super(o.toUpperCase());m.set(this,0);c(this,m,o.length)}hello(){return"ClassA say: "+super.hello()}get value(){return a(this,m)}set value(o){c(this,m,o)}};m=new WeakMap;var i=y;var g,h=class extends u{static get PI(){return Math.PI}constructor(o){super(o.toLowerCase())}hello(){return`ClassB say: ${super.hello()} ${a(h,g)}`}radius(o){return 2*o*h.PI}},d=h;g=new WeakMap,g.set(d,"To all world.");var s=d;console.log("window.angular",window.angular.version.full);window.angular.module("myApp",["ngRoute","ngSanitize","ui.bootstrap","pascalprecht.translate"]);angular.module("myApp").controller("rootCtrl",M);M.$inject=["$rootScope"];function M(e){e.test="Test text",e.testProp="Some property from outside",e.customer={name:"Naomi",address:"1600 Amphitheatre"}}angular.module("myApp").component("myComponent",{templateUrl:"my-component/my-component.html",bindings:{myProp:"="},controllerAs:"vm",controller:j});j.$inject=["$rootScope"];function j(e){console.log("Component ctrl myComponent",e),this.zx=789}console.log("myComponent ????");var t=new i("Marko");console.log(t.hello(),t.hello()==='ClassA say: My name is MARKO and I say "Hello".');console.log(t.value,t.value===5);console.log(t.name,t.name==="MARKO");console.log(i.SOME_VALUE,i.SOME_VALUE===123456789);t.value=10;console.log(t.value,t.value===10);var n=new s("Andrej");console.log(s.PI,s.PI===3.141592653589793);console.log(s.SOME_VALUE,s.SOME_VALUE===123456789);console.log(n.name,n.name==="andrej");n.name=787899;console.log(n.name,n.name==="andrej");console.log(n.hello(),n.hello()==='ClassB say: My name is andrej and I say "Hello". To all world.');console.log(n.radius(10),n.radius(10)===62.83185307179586);s.SOME_VALUE=5;console.log(s.SOME_VALUE,s.SOME_VALUE===5);window.testApp={a:t,b:n};console.log("MAIN");var v=e=>e*5;console.log(v(6));