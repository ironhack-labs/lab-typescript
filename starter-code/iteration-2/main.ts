// Add the reference to the "TodoInterface"

import { TodoInterface } from "./todoInterface";


// 1. Create a class Todo that implements the Interface created before.


class Todo implements TodoInterface {
    toDoList: string[] = [];

    addTask(task: string): number {
        this.toDoList.push(task);
        console.log(`=========== NEW TASK ===========\nTask "${task}" inserted in the list`);
        return this.toDoList.length;
    }
    listAllTasks(): void {
        this.toDoList.forEach(element => {
            console.log(element);
        })
    }
    deleteTask(task: string): number {
        let index = this.toDoList.findIndex(savedTask => {
            return savedTask === task
        });
        this.toDoList.splice(index, 1);
        console.log(`=========== TASK REMOVED ===========\nTask "${task}" removed from the list`);
        return this.toDoList.length;
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
