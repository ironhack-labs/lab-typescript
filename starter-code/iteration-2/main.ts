// Add the reference to the "TodoInterface"
import { TodoInterface } from './todoInterface';


// 1. Create a class Todo that implements the Interface created before.
class Todo implements TodoInterface {
    constructor (public myArray: Array<string>) {

    }
    addTask(task: string):number {
        myArray.push(task);
        console.log(task + " inserted");
        return myArray.length;
    }
    listAllTasks():void {
        myArray.forEach((task) => {
        console.log(task);
        });
    }
    deleteTask(task: string):number {
        myArray = myArray.filter((currentTask)=> {
        currentTask !== task;
        });
        console.log(`${task} delete`);
        return myArray.length;
    }

}

// Execution
let myArray: Array<string> = [];
let myTodos = new Todo(myArray);
console.log("Number of items:", myTodos.addTask('This is our first task'));
console.log("Number of items:", myTodos.addTask('Eat pizza 🍕 yummy!!!'));
console.log("Number of items:", myTodos.addTask('Finish this iteration 1!! 🤓'));
console.log("Number of items:", myTodos.addTask('Finish this iteration 2!! 🤓'));
console.log("Number of items:", myTodos.addTask('Finish this iteration 3!! 🤓'));
myTodos.listAllTasks();
console.log("Number of items:", myTodos.deleteTask('Finish this iteration 1!! 🤓'));
console.log("Number of items:", myTodos.deleteTask('Finish this iteration 2!! 🤓'));
myTodos.listAllTasks();
