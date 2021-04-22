import BaseClass from "./BaseClass";

export default class ClassB extends BaseClass {

	static get PI() { return Math.PI }

	static #message = 'To all world.'

	constructor(name) {
		super(name.toLowerCase());
	}

	hello() {
		return `ClassB say: ${super.hello()} ${ClassB.#message}`;
	}

	radius(r) {
		return 2 * r * ClassB.PI
	}
}
