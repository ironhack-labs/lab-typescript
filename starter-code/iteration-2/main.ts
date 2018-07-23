// Add the reference to the "TodoInterface"
import {toDoInterface} from "../iteration-2/todoInterface";
// 1. Create a class Todo that implements the Interface created before.
class Todo implements toDoInterface {
    tasks: Array<string> = [];
    constructor() {}

    addTask(task:string){
    this.tasks.push(task)
    console.log(this.tasks)
    return this.tasks.length;
}
    listAllTasks(){
        for(let i = 0; i < this.tasks.length; i++) {
            console.log(this.tasks[i]);
    }
}
    deleteTask(task:string){
        var i = this.tasks.indexOf("Finish this iteration 1!! 🤓");
            if(i != -1) {
                this.tasks.splice(i, 2);
        }
    }
}

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
