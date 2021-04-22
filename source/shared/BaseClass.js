export default class BaseClass {

	static SOME_VALUE = 123456789

	#name = ''

	constructor(name) {
		this.#name = name;
	}

	get name() { return this.#name }

	hello() {
		return this.#name ? `My name is ${this.#name} and I say "Hello".` : 'I not have name yet...'
	}
}
