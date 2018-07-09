// Add the reference to the "TodoInterface"
interface TodoInterface {
    task: Array<string>;
    addTask(task: string);
    listAllTasks;
    deleteTask(task: string);
}


// 1. Create a class Todo that implements the Interface created before.
class Todo implements TodoInterface{
    constructor(
    public addTask: string,
    public listAllTasks: string,
    public deleteTask: string
    ) { }
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
