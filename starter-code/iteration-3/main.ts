// Add the reference to the interface
import {InterfaceTodoItem} from "./interfaces";
import {interfaceTodo} from "./interfaces";
// Create class TodoItem that implements the corresponding interface
class TodoItem implements InterfaceTodoItem{
  status = false;
  updatedAt = new Date();
  constructor (public title:string){}

  toggleStatus(){
    if (this.status = true){
      this.status = false;
    } else {
      this.status = true;
      }
      this.updatedAt= new Date();
    }

}
// Create class TodoList that implements the corresponding interface

class TodoList implements interfaceTodo{

  constructor(public todoItems: Array<InterfaceTodoItem>=[]){}

  addTask(task){
    this.todoItems.push(task);
    return this.todoItems.length
  };

  listAllTasks(){
      this.todoItems.forEach((task)=>{
        console.log(task)
      })

    };
    deleteTask(task){
     const index = this.todoItems.indexOf(task)
       this.todoItems.splice(index,1);
       return this.todoItems.length;
   };
   listUncomplete(){
     this.todoItems.forEach((task)=>{
       if (task.status = false){
         console.log(task);
       }
     })
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
