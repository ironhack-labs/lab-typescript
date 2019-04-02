// Add the reference to the "TodoInterface"
import ITodo from './todoInterface'

class Todo implements ITodo {
    tasks: string[];    
    
    addTask(taskToAdd: string): void {
        this.tasks.push(taskToAdd);
    }
    listAllTasks(): void {
        this.tasks.forEach(function (task) {
            console.log("Taks " + task);
        });
    }
    deleteTask(taskToDelete: string): void {
        this.tasks = this.tasks.filter(function (task) { return task !== taskToDelete; });
    }
}
// 1. Create a class Todo that implements the Interface created before.
// Execution
let myTodos  = new Todo();
console.log("Number of items:", myTodos.addTask('This is our first task'));
console.log("Number of items:", myTodos.addTask('Eat pizza 🍕 yummy!!!'));
console.log("Number of items:", myTodos.addTask('Finish this iteration 1!! 🤓'));
console.log("Number of items:", myTodos.addTask('Finish this iteration 2!! 🤓'));
console.log("Number of items:", myTodos.addTask('Finish this iteration 3!! 🤓'));
myTodos.listAllTasks();
console.log("Number of items:", myTodos.deleteTask('Finish this iteration 1!! 🤓'));
console.log("Number of items:", myTodos.deleteTask('Finish this iteration 2!! 🤓'));
myTodos.listAllTasks();
