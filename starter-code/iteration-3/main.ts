// Add the reference to the interface
import { TodoItemInterface } from "./interfaces"; 
import { TodoListInterface } from "./interfaces"; 

// Create class TodoItem that implements the corresponding interface
class TodoItem implements TodoItemInterface{
    constructor (public title:string){}
    status: boolean
    updatedAt: Date
    toggleStatus():void{
        if (this.status === true){
            this.status = false
            this.updatedAt = new Date()
        }else{
            this.status = true
        }
    }
}

// Create class TodoList that implements the corresponding interface

class TodoList implements TodoListInterface{
    tasks: Array <TodoItem> = [];
    addTask(task: TodoItem):number {
        this.tasks.push(task)
        return this.tasks.length;
      }
    listAllTasks() {
        this.tasks.forEach((elem) => { console.log(elem)});
      }
    deleteTask(task: TodoItem):number {
        let i = this.tasks.indexOf(task, 0);
        if (i > -1){
            this.tasks.splice(i, 1);
        }
        return this.tasks.length;
      }
      listUncomplete(){
          this.tasks
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
