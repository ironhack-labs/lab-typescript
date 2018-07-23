// Add the reference to the interface
import { TodoItemInterface, TodoListInterface } from "./interfaces"
// Create class TodoItem that implements the corresponding interface
export class TodoItem implements TodoItemInterface {
    constructor(public title:string){}
    status: boolean;
    updatedAt: Date;
    toggleStatus(): void {
        if (this.status == false) {
            this.status = true
        } else {
            this.status = false
        }
        this.updatedAt = new Date();
    }
}
// Create class TodoList that implements the corresponding interface
class TodoList implements TodoListInterface {
    array: Array<TodoItem> = []
    addTask(task: TodoItem): number {
        this.array.push(task)
        console.log(`Task ${task} inserted in the list`)
        console.log(this.array.length)
        return this.array.length
    }
    listAllTasks(): void {
        this.array.forEach(task => {
            console.log(task)
        })
    }
    deleteTask(task: TodoItem): number{
        this.array.splice(this.array.indexOf(task),1)
        console.log(`Task ${task} removed from the list`)
        console.log(this.array.length)
        return this.array.length
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

