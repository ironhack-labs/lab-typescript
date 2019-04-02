// Add the reference to the interface
import { TodoItemInterface, TodoListInterface } from './interfaces';
// Create class TodoItem that implements the corresponding interface
class TodoItem implements TodoItemInterface {
    title: string
    status: boolean
    updatedAt: Date
    constructor(title: string) {
        this.title = title
        this.updatedAt = new Date()
    }
    toggleStatus(): boolean {
        this.updatedAt = new Date()
        return !this.status
    }
}
// Create class TodoList that implements the corresponding interface

class TodoList implements TodoListInterface {
    tasks: Array<TodoItem> = []
    addTask(task: TodoItem) {
        this.tasks.push(task)
        console.log('Task Inserted')
        console.log(this.tasks.length)
        return this.tasks.length
    }
    listAllTasks() {
        this.tasks.forEach(e => console.log(`Titulo: ${e.title}, updatedAt: ${e.updatedAt}`))
    }
    deleteTask(task: TodoItem) {
        const index: number = this.tasks.indexOf(task)
        this.tasks.splice(index, 1)
        console.log('Task Deleted')
        console.log(this.tasks.length)
        return this.tasks.length
    }
    listUncomplete() {
        this.tasks.filter(e => e.status == false).forEach(e => console.log(e))
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
myTodos.listUncomplete();
