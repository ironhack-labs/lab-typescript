// Add the reference to the "TodoInterface"
import {TodoInterface} from "./todoInterface"

class Todo implements TodoInterface {
    todoList: Array<string> = [];

    constructor(public taskList: Array<string>) {}

    // taskList:Array<string> = [];
    
    addTask(task: string):number {
        this.todoList.push(task);
        console.log("the new task has been added to the list", this.todoList.length);
        return this.todoList.length;
    }

    listAllTasks():void {
        console.log(this.todoList);

        this.todoList.forEach((task) => {
            console.log(task);
        });
    }

    deleteTask(task):number {
        let index = this.todoList.indexOf(task);
        this.todoList.splice(index, 1);
        console.log("the task has been deleted from the list", this.todoList.length);
        return this.todoList.length;
    
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


