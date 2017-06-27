// Add the reference to the "TodoInterface"
/*jslint node: true */
import { iTodo } from "./todoInterface";

// 1. Create a class Todo that implements the Interface created before.
class Todo implements iTodo{
    
    tasks: Array<string> = [];

    addTask( taskToInsert : string ) {
        this.tasks.push( taskToInsert );
        console.log(`Task ${taskToInsert} inserted in the list`);
        return (this.tasks.length);
    }

    listAllTasks() {
        console.log('*********** LIST ALL TASK ****************');
        this.tasks.forEach(oneTask => {
            console.log(oneTask);
        });    
    }

    deleteTask( taskToDelete : string ) {
        var index = this.tasks.indexOf(taskToDelete);
        if (index > -1) {
            this.tasks.splice(index, 1);
        }
        console.log(`Task ${taskToDelete} deleted from the list`);
        return (this.tasks.length);
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