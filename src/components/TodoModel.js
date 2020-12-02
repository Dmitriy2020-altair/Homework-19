export default class TodoModel {
	constructor(todos = []) {
		this._todos = todos;
		this._subscribers = [];
		this._writeMode = false;

		this.notify();
	}

	addTodo(todo) {
		const copyOfTodos = this._todos.slice();

		copyOfTodos.push(todo);

		this._todos = copyOfTodos;
		this.notify();
	}

	removeTodo(todoId) {
		const newTodos = this._todos.filter(todo => todo.id !== todoId);

		this._todos = newTodos;
		this.notify();
	}

	toggleTodoDone(todoId) {
		const todo = this._todos.find(todo => todo.id === todoId);
		const todoIndex = this._todos.findIndex(todo => todo.id === todoId);
		const newTodos = this._todos.slice();

		newTodos[todoIndex].isDone = !todo.isDone;

		this._todos = newTodos;
		this.notify();
	}

	toggleTodoWriteble(todoId) {
		const todo = this._todos.find(todo => todo.id === todoId);
		const todoIndex = this._todos.findIndex(todo => todo.id === todoId);
		const newTodos = this._todos.slice();

		if (todo.isWriteble === false) {
			this._writeMode = true;
		} else {
			this._writeMode = false;
		}

		newTodos[todoIndex].isWriteble = !todo.isWriteble;

		this._todos = newTodos;
		this.notify();
	}

	changeTodoTitle({todoId, newTitle}) {
		const todo = this._todos.find(todo => todo.id === todoId);
		const todoIndex = this._todos.findIndex(todo => todo.id === todoId);
		const newTodos = this._todos.slice();

		newTodos[todoIndex].title = newTitle;
		newTodos[todoIndex].isWriteble = false;

		this._writeMode = false;
		this._todos = newTodos;
		this.notify();
	}

	notify() {
		this._subscribers.forEach(sub => sub());
	}

	subscribe(callback) {
		this._subscribers.push(callback);
	}

	getTodos() {
		return this._todos;
	}

	getWriteMode() {
		return this._writeMode;
	}

}