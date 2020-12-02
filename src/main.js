import TodoModel from './components/TodoModel';
import TodoView from './components/TodoView';
import TodoController from './components/TodoController';
import './style.css';

const todos = [
	{ id: '1', title: 'Learn JavaScript', isDone: false, isWriteble: false },
];

const todo = new TodoController(new TodoModel(todos), new TodoView('todo'));