// Add the reference to the interface
import {TodoItemInterface, TodoListInterface} from "./interfaces"


// Create class TodoItem that implements the corresponding interface

class TodoItem implements TodoItemInterface {
  updatedAt: Date;
  status: boolean;
  constructor( public title: string){
      this.updatedAt = new Date();
      this.status = false;
  };

  toggleStatus(){
      if(this.status === false){
        this.status = true;
      }
      else
      this.status = false;
  };
}
// Create class TodoList that implements the corresponding interface
class TodoList implements TodoListInterface {
  myArray: TodoItem[] = [];
  constructor(){};
  addTask(task:TodoItem){
    this.myArray.push(task);
    console.log('=========== NEW TASK ===========');
    console.log(task);
    return this.myArray.length;
  };
  listAllTasks(){
    this.myArray.forEach((oneTask) => {
      console.log(oneTask);
    });
  };
  deleteTask(task:TodoItem){
    const removeTaskIndex =  this.myArray.indexOf(task);
    this.myArray.splice(removeTaskIndex, 1);
    task.toggleStatus();
    console.log('=========== TASK DELETED ===========');
    console.log(task);
    return this.myArray.length;
  };
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
// myTodos.listUncomplete();
