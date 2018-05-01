// Add the reference to the "TodoInterface"
import {toDoInterface} from "./todoInterface";

// 1. Create a class Todo that implements the Interface created before.
class Todo implements toDoInterface{
    tasks: Array<string>
    // constructor(
    //     public tasks: Array<string>
    // ){};

    addTask (task: string){
        this.tasks.push(task);
        console.log(`${task} added to this.tasks array`);
        console.log(this.tasks.length);
        return this.tasks.length;
    };

    listAllTasks(){
        this.tasks.map((one) => {
            console.log(one);
        })
    };

    deleteTask(task){
        let index = this.tasks.findIndex(task);
        this.tasks.splice(index, 1);
        console.log(`${task} has been removed from the list`);
        console.log(this.tasks.length);
        return this.tasks.length;
    };
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
