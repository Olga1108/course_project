class UserName {
	constructor(name) {
		this.name = name;
	}

	setToStorage (name) {
		localStorage.setItem('userName', name)
	}
	getFromStorage () {
		return localStorage.getItem('userName')
	}
	deleteFromStorage () {
		return localStorage.clear()
	}
}

const currentUser = new UserName()

export default currentUser;