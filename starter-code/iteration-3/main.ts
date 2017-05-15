// Add the reference to the interface
import { TodoItemInterface } from './interfaces';
import { TodoInterface } from './interfaces';
// Create class TodoItem that implements the corresponding interface
class TodoItem implements TodoItemInterface{
  done: boolean = false;
  updatedAt: Date = new Date;
  constructor(public title: string){};
  checkDone(done){
    done = this.done;
    if(done == false){
      this.done = true;
    }else{
      this.done = false;
    }
  }
}
// Create class TodoList that implements the corresponding interface
class TodoList implements TodoInterface{
  constructor(public list: Array<TodoItem> = []){}

  addTask(task):number{
    this.list.push(task)
    return this.list.length;
  }
  listAllTasks():void{
    console.log(this.list);
  }
  deleteTask(task):number{
    let toRemove = this.list.indexOf(task);
    this.list.splice(toRemove, 1);
    return this.list.length;

  }
  listUncomplete(){
    this.list.forEach(function(task){
      if(task.done == false){
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
