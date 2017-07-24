// Add the reference to the interface
import {todoItemInterface,todoListInterface} from "./interfaces"

// Create class TodoItem that implements the corresponding interface
class TodoItem implements todoItemInterface {
  constructor (public title:string, public status: boolean, public updatedAt: Date) {}

  toggleStatus() {
    this.status ? this.status = false : this.status;  
    this.updatedAt = new Date();
  }
}
// Create class TodoList that implements the corresponding interface
class TodoList implements todoListInterface {

  constructor(public arrayofItems: Array<todoItemInterface>) {}

  addTask(item: TodoItem):number {
    this.arrayofItems.push(item);
    console.log(`
    =========== NEW TASK ===========
    Task ${item.title} inserted in the list
    `)
    return this.arrayofItems.length;
  }

listAllTasks():void{
  this.arrayofItems.forEach(function(item){
    console.log(item.title,item.updatedAt);
  })
}

deleteTask(item: TodoItem):number{
  const index = this.arrayofItems.indexOf(item);
  if (index !=-1) {
    this.arrayofItems.splice(index,1);
  }
  return this.arrayofItems.length;
}

}


// Execution
let task1 = new TodoItem('This is our first task',false,new Date());
let task2 = new TodoItem('Eat pizza 🍕 yummy!!!',false,new Date());
let task3 = new TodoItem('Finish this iteration 1!! 🤓',false,new Date());
let task4 = new TodoItem('Finish this iteration 2!! 🤓',false,new Date());
let task5 = new TodoItem('Finish this iteration 3!! 🤓',false,new Date());

let myTodos = new TodoList([]);

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
