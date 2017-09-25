// Add the reference to the "TodoInterface"
import {TodoInterface} from "./todoInterface";

class Todo implements TodoInterface {

	constructor(){}

	strings: Array<string> = [];

	// 2. Create a function to add a task in to the array, call it `addTask`, the function has to accept a string and don't have to return anything.
	 addTask(task:string):number{
		this.strings.push(task);
		console.log('It works');
		return this.strings.length;
	}


	// 3. Create a  to list all tasks, it must show in the console de task.
	 listAllTasks(){
		this.strings.forEach((el)=>{
			console.log(el);
		})
	}

	// 4. Create a  to delete a task, you must find the task inside the array and delete it.
	 deleteTask(task:string):number{
		let pos = this.strings.indexOf(task);
		this.strings.splice(pos, 1);
		console.log('delete works');
		return this.strings.length;
	}
}

// 1. Create a class Todo that implements the Interface created before.

// Execution
let myTodos = new Todo();
console.log("Number of items:", myTodos.addTask('This is our first task'));
console.log("Number of items:", myTodos.addTask('Eat pizza 🍕 yummy!!!'));
console.log("Number of items:", myTodos.addTask('Finish this iteration 1!! 🤓'));
console.log("Number of items:", myTodos.addTask('Finish this iteration 2!! 🤓'));
console.log("Number of items:", myTodos.addTask('Finish this iteration 3!! 🤓'));
myTodos.listAllTasks();
console.log("Number of items:", myTodos.deleteTask('Finish this iteration 1!! 🤓'));
console.log("Number of items:", myTodos.deleteTask('Finish this iteration 2!! 🤓'));
myTodos.listAllTasks();
