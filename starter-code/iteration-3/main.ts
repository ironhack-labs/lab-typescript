// Add the reference to the interface
import { TodoItemInterface, TodoListInterface } from './interfaces';

// Create class TodoItem that implements the corresponding interface
class TodoItem implements TodoItemInterface {
    constructor (public title: string, public status: boolean, public updatedAt: Date){}
    toggleStatus():void {
        this.status = !this.status;
        this.updatedAt = new Date();
    }
}

// Create class TodoList that implements the corresponding interface
class TodoList implements TodoListInterface {
    constructor (public myArray: Array<TodoItem>){}
    addTask(task: TodoItem):number {
        this.myArray.push(task);
        console.log(`${task.title} inserted`)
        return this.myArray.length;
    }
    listAllTasks():void {
       this.myArray.forEach((task) => {
        console.log(`${task.title} - ${task.updatedAt}`);
        });
    }
    deleteTask(task: TodoItem):number {
       this.myArray = this.myArray.filter((currentTask)=> {
            currentTask !== task;
        });
        console.log(`${task.title} delete`);
        return this.myArray.length;
    }
    listUncomplete():void {
       this.myArray.forEach((task) => {
           if (!task.status) {
            console.log(`incompleted task: ${task.title} - ${task.updatedAt}`);
           }
        });
    }
}

// Execution
let task1 = new TodoItem('This is our first task', false, new Date());
let task2 = new TodoItem('Eat pizza 🍕 yummy!!!', false, new Date());
task1.toggleStatus();
let task3 = new TodoItem('Finish this iteration 1!! 🤓', false, new Date());
let task4 = new TodoItem('Finish this iteration 2!! 🤓', false, new Date());
let task5 = new TodoItem('Finish this iteration 3!! 🤓', false, new Date());
task5.toggleStatus();

let todoArray = [];
todoArray.push(task1);
todoArray.push(task2);
todoArray.push(task3);
todoArray.push(task4);
todoArray.push(task5);
let myTodos = new TodoList(todoArray);
myTodos.listUncomplete();

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
