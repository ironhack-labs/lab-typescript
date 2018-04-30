// Add the reference to the interface
import {
    TodoItemInterface
} from './interfaces';
import {
    TodoListInterface
} from './interfaces';

// Create class TodoItem that implements the corresponding interface
class TodoItem implements TodoItemInterface {
    updatedAt: Date = new Date();
    status: boolean = false

    toogleStatus(status: boolean) {
        this.status = true;
        this.updatedAt.getDate()
    }
    constructor(public title: string, ) { }
}
// Create class TodoList that implements the corresponding interface
class TodoList implements TodoListInterface {

    myArray: Array<TodoItem> = [];
    constructor() { }
    addTask(task: TodoItem) {
        this.myArray.push(task);
        console.log("Task añadida")
        return this.myArray.length;
    }

    // 3. Create a function to list all tasks, it must show in the console de task.

    listAllTasks() {
        this.myArray.forEach(element => {
            console.log(element)
            console.log(element.title, element.updatedAt)
        });
    }

    // 4. Create a function to delete a task, you must find the task inside the array and delete it.
    deleteTask(task) {
        let index = this.myArray.indexOf(task);
        this.myArray.splice(index, 1);
        console.log("elemento borrado");
        console.log(this.myArray.length)
        return this.myArray.length;

    }
}

// Execution
let task1 = new TodoItem('This is our first task');
let task2 = new TodoItem('Eat pizza 🍕 yummy!!!');
let task3 = new TodoItem('Finish this iteration 1!! 🤓');
let task4 = new TodoItem('Finish this iteration 2!! 🤓');
let task5 = new TodoItem('Finish this iteration 3!! 🤓');

let myTodos = new TodoList();

console.log("Number of items:", myTodos.addTask(task1));
console.log("Number of items:", myTodos.addTask(task2));
console.log("Number of items:", myTodos.addTask(task3));
console.log("Number of items:", myTodos.addTask(task4));
console.log("Number of items:", myTodos.addTask(task5));
myTodos.listAllTasks();
console.log("Number of items:", myTodos.deleteTask(task3));
console.log("Number of items:", myTodos.deleteTask(task4));
console.log("Number of items:", myTodos.deleteTask(task5));
