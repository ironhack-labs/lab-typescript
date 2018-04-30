import { TodoItemInterface } from "./interfaces";
import { ToDoInterface } from "./interfaces";

// Add the reference to the interface

// Create class TodoItem that implements the corresponding interface
class TodoItem implements TodoItemInterface {
    constructor(
        public title: string,
        public status: boolean,
        public updatedAt: Date
    ){}
    toggleStatus(status){
        if(this.status){
            this.status = Boolean("finished");
        }else{
            this.status = Boolean("unfinished");
        }
        this.updatedAt = new Date();
    }
}
// Create class TodoList that implements the corresponding interface

class TodoList implements ToDoInterface {
    constructor(
        public items: Array <object> = []
    ){}
    addTask(task: object) {
        this.items.push(task);
        console.log(task);
        console.log(this.items.length);
        return this.items.length;
      }
      listAllTasks() {
        this.items.forEach(oneTask => {
          console.log(oneTask);
        });
      }
      deleteTask(task: object) {
        let index = this.items.indexOf(task);
        this.items.splice(index, 1);
        console.log(task);
        // console.log(`Deleted ${index} ${task}`);
        console.log(`Tasks left ${this.items.length}`);
        return this.items.length;
      }
}

// Execution
let task1 = new TodoItem('This is our first task', false, new Date());
let task2 = new TodoItem('Eat pizza 🍕 yummy!!!', false, new Date());
let task3 = new TodoItem('Finish this iteration 1!! 🤓', false, new Date());
let task4 = new TodoItem('Finish this iteration 2!! 🤓', false, new Date());
let task5 = new TodoItem('Finish this iteration 3!! 🤓', false, new Date());

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
// myTodos.listUncomplete();
