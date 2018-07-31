// Add the reference to the "TodoInterface"
import {taskMethods} from './todoInterface.js';

// 1. Create a class Todo that implements the Interface created before.
class Todo implements taskMethods {
    // constructor(public string: Array<string>){}
    tasks= [];
    addTask(string:string){
        this.tasks.push(string);
        console.log(`Inserted "${string}" into Tasks`)
        return this.tasks.length
    }
    listAllTasks(){
        this.tasks.forEach((e, i) => {
            console.log(`Task ${i} is ${e}`)
        })
    }
    deleteTask(string: string){
        const index = this.tasks.indexOf(string);
        console.log(`Number of tasks before deletion: ${this.tasks.length}`)
        this.tasks.splice(index, 1);
        console.log(`Deleted "${string}" from Tasks`)
        return this.tasks.length;
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
