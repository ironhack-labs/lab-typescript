// Add the reference to the interface
import {iTodoItem} from "./interfaces";
import {iTodo} from "./interfaces";

// Create class TodoItem that implements the corresponding interface

class TodoItem implements iTodoItem{
	
	title: string;
	done: boolean;
	
	constructor(title: string){
		this.title = title;
		this.done = false;
	}
	
	toggleDone(bool: boolean) {
		this.done = bool;
	}
}

class TodoList implements iTodo {
	
	constructor(public tasks: iTodoItem[] = []){}
	
	addTask(task:TodoItem){
		this.tasks.push(task);
		return this.tasks.length;
	}

// 3. Create a function to list all tasks, it must show in the console de task.

	listAllTasks(){
		this.tasks.forEach(function(theTask) {
			console.log(theTask.title);
		});
	}

// 4. Create a function to delete a task, you must find the task inside the array and delete it.
	deleteTask(task:TodoItem){
		//this.tasks.splice(this.tasks.indexOf(task), 1);
		
		let index = 0; 
		
		while(task.title != this.tasks[index].title){
			if(index < this.tasks.length )
				return this.tasks.length;			
			index++
		}		
		this.tasks.splice(index, 1);
		return this.tasks.length;
	}
	
	listUncomplete(){
		this.tasks.forEach(function(theTask) {
			console.log(theTask.title);
		});
	}
}

// Create class TodoList that implements the corresponding interface

// Execution
let task1 = new TodoItem('This is our first task');
let task2 = new TodoItem('Eat pizza 🍕 yummy!!!');
let task3 = new TodoItem('Finish this iteration 1!! 🤓');
let task4 = new TodoItem('Finish this iteration 2!! 🤓');
let task5 = new TodoItem('Finish this iteration 3!! 🤓');

let myTodos = new TodoList();

console.log("Number of items:", myTodos.addTask(task1));
console.log("Number of items:", myTodos.addTask(task2));
console.log("Number of items:", myTodos.addTask(task3));
console.log("Number of items:", myTodos.addTask(task4));
console.log("Number of items:", myTodos.addTask(task5));
myTodos.listAllTasks();
console.log("Number of items:", myTodos.deleteTask(task3));
console.log("Number of items:", myTodos.deleteTask(task4));
console.log("Number of items:", myTodos.deleteTask(task5));
myTodos.listUncomplete();
