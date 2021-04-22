import BaseClass from "./BaseClass";

export default class ClassA extends BaseClass {

	#value = 0

	constructor(name) {
		super(name.toUpperCase());
		this.#value = name.length
	}

	hello() {
		return "ClassA say: " + super.hello();
	}

	get value() {
		return this.#value
	}

	set value(value) {
		this.#value = value
	}
}
