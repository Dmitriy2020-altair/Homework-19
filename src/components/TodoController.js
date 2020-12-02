export default class TodoController {
	constructor(model, view) {
		this.model = model;
		this.view = view;

		this.model.subscribe(() => {
			this.view.render();
		});

		this.view.dispatch = this.dispatch;

		this.view.render();
	}

	dispatch = (action) => {

		const model = this.model;

		switch (action.type) {

			case 'ADD-TODO':
				model.addTodo(action.payload);
				break;
			
			case 'REM-TODO':
				model.removeTodo(action.payload);
				break;
			
			case 'TOGGLE-TODO-ISDONE':
				model.toggleTodoDone(action.payload);
				break;
			
			case 'TOGGLE-TODO-WRITEBLE':
				this.model.toggleTodoWriteble(action.payload);
				break;
			case 'GET-TODOS':
				return model.getTodos();
			
			case 'GET-WRITEMODE':
				return model.getWriteMode();
			
			case 'CHANGE-TODO-TILE':
				model.changeTodoTitle(action.payload)
			
			default: return;
		}
	}
}

