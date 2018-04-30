// Add the reference to the interface
import { TodoItemInterface } from "./interfaces.js";
import { ToDoListInterface  } from "./interfaces.js";

// Create class TodoItem that implements the corresponding interface
class TodoItem implements TodoItemInterface {
    constructor(public title:string, public updatedAt:Date) { }

    updatedAt = new Date();
    status = "unfinished";

    toggleStatus():boolean {
        if(this.status == "unfinished") {
            this.status = "finished";
            this.updatedAt = new Date();
            return true;
        }
        else if(this.status == "finished") {
            this.status = "unfinished";
            this.updatedAt = new Date();
            return false;
        }
    }
}

// Create class TodoList that implements the corresponding interface
class TodoList implements ToDoListInterface {
    constructor(public itemList: Array<Object> = []) { }

    addTask(TodoItem: string):number {
        this.itemList.push(TodoItem);
        console.log(`Add ${TodoItem} to the to do list`);
        console.log(this.itemList.length);
        return this.itemList.length;
    }

    listAllTasks() {
        this.itemList.forEach((oneItem) => {
            console.log(oneItem.title);
        });
    }

    deleteTask(TodoItem: string):number {
        for(var i = 0; i < this.itemList.length; i++) {
            if(this.itemList[i] == TodoItem) {
                this.itemList.splice(i, 1);
            }
        }
        console.log(`Delete ${TodoItem} to the to do list`);
        console.log(this.itemList.length);
        return this.itemList.length;
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
