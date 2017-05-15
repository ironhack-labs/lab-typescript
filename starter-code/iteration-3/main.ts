// Add the reference to the interface
import { TodoItemInterface, TodoListInterface} from './interfaces';

export class TodoItem implements TodoItemInterface{
    status:boolean = false;
    updatedAt:Date;
    constructor(public title:string) {
        this.updatedAt = new Date(Date.now());
    }
    statusToggle(){
        this.status = !this.status;
        this.updatedAt = new Date(Date.now());
    }
}
// Create class TodoList that implements the corresponding interface
class TodoList implements TodoListInterface {
    constructor(public items: Array<TodoItem> = []){}
    addTask(item: TodoItem) {
        console.log("Task \""+ item.title +"\" inserted in the list!");
        this.items.push(item);
        return this.items.length;
    }
    listAllTasks() {
        this.items.forEach((item) => {
            console.log("Task " + item.title + " Updated at " + item.updatedAt);
        });
    }
    deleteTask(item:TodoItem) {
        this.items.splice(this.items.indexOf(item), 1);
        console.log("Task \"" + item.title + "\" removed from list");
        return this.items.length;
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
