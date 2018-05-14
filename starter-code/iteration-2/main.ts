// Add the reference to the "TodoInterface"
import { toDoList } from "./todoInterface";
// 1. Create a class Todo that implements the Interface created before.
class Todo implements toDoList {
    array= [];

    addTask = (task: string): number => {
        this.array.push(task);
        console.log(`Task ${task} inserted in the list`)

        return this.array.length;
    }

    listAllTasks = (): void => {
        this.array.forEach((element: string) => {
            console.log(element);
        })
    }

    deleteTask = (task: string): number => {
    for (let i = 0; i < this.array.length; i++) {
        if (this.array[i] === task) {
            this.array.splice(i, 1);
            break;
        }
    }
    console.log(`Task ${task} removed from the list`)

    return this.array.length;
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
