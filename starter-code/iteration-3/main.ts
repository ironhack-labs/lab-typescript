// Add the reference to the interface

// Create class TodoItem that implements the corresponding interface
class TodoItem implements TodoItemInterface{
  status:boolean = false;
  updatedAt:Date = new Date();
  constructor(public title:string){};
  toggleStatus(){
    this.status= this.status?false:true;
    this.updatedAt= new Date();
  };
}
// Create class TodoList that implements the corresponding interface
class TodoList implements TodoListInterface{
  taskList:Array<TodoItem> = [];
  constructor(){};
  addTask(task:TodoItem):number{
    this.taskList.push(task);
    return this.taskList.length;
  };
  listAllTasks():void{
    this.taskList.forEach((e)=>{
      console.log(e.title, e.updatedAt);
    })
  }
  deleteTask(task:TodoItem):number{
    this.taskList.splice(this.taskList.indexOf(task),1);
    return this.taskList.length;
  }
  listUncomplete():void{
    this.taskList.forEach((e)=>{
      if(!e.status) console.log(e);
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
