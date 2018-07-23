// Add the reference to the interface
import {TodoItemInterface} from "./interfaces"
import {TodoListInterface} from "./interfaces"

// Create class TodoItem that implements the corresponding interface
class TodoItem implements TodoItemInterface {
    status: boolean;
    title: string;
    updatedAt: Date

    constructor(title: string){
        this.title = title;
        this.status = true;
    }
    list: Array<string>
    uncomplete:Array<any>

    toggleStatus(): void{
        if(this.status === true) this.status = false;
        else this.status = true;
    }
}

// Create class TodoList that implements the corresponding interface
class TodoList implements TodoListInterface {
    task: TodoItem
    list: Array<TodoItem>=[]
    uncomplete:Array<any>=this.list


  
    addTask(task: TodoItem) {
      this.list.push(task)
    }
  
    deleteTask(task: TodoItem) {
      this.uncomplete.forEach((e,index) => {
        if (e === task) {
          this.uncomplete.splice(index, 1)
          return this.uncomplete;
        }
        return this.uncomplete;
      });
    }
  
    listUncomplete(){
      console.log("nueva lista",  this.uncomplete)
    }
    listAllTasks() {
      console.log(this.list)
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
console.log("Number of items:", myTodos.deleteTask(task3));
console.log("Number of items:", myTodos.deleteTask(task4));
console.log("Number of items:", myTodos.deleteTask(task5));
myTodos.listAllTasks();

myTodos.listUncomplete();

