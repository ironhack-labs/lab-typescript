

// Add the reference to the "TodoInterface"

class Todo implements TodoItem {
    constructor( public todolist: string[] = []) {}


    addTask(task): number {
        this.todolist.push(task);
        return this.todolist.length;
    }

    listAllTasks(): void {
        this.todolist.forEach( (task) => {
            console.log(task);
        }
    }

    deleteTask(task): number {
        var i = this.todolist.indexOf(task);
        this.todolist.splice(i, 1);
        return this.todolist.length;
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
