// Add the reference to the interface
import{TodoItemInterface, TodoListInterface} from "./interfaces";

// Create class TodoItem that implements the corresponding interface
class TodoItem implements TodoItemInterface {
  status: boolean;
  title: string;
  updatedAt: Date;

  constructor(title: string, status: boolean, updatedAt: Date){
    this.title=title;
    this.status=status;
    this.updatedAt=updatedAt;
  }

  toggleStatus():void{
    if(this.status=true){
      this.status=false;
    } else {
      this.status=true
    }
    this.updatedAt = new Date();
  }
 
}
// Create class TodoList that implements the corresponding interface

class TodoList implements TodoListInterface {
  list: Array<string>;

  addTask(TodoItem):number{
    console.log(TodoItem);
    return list.length;
  }

  listAllTasks():void{
    for(let i=0;i<list.length;i++){
      console.log(list[i]+this.title+": "+ this.updatedAt)
    }
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
