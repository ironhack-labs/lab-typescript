// Add the reference to the interface

// Create class TodoItem that implements the corresponding interface
interface TodoItemInterface {
  title: string;
  status: boolean;
  updatedAt: Date;
  toggleStatus() :boolean;
}
// Create class TodoList that implements the corresponding interface
interface TodoListInterface {
  taskArray : Array<string>;
  addTask(task: string) :number;
  listAllTasks();
  deleteTask(task: string) :number;
}
// Execution
class TodoItem implements TodoItemInterface {
  title : string;
  status: boolean;
  updatedAt: Date;
  constructor(public task:string){}
  toggleStatus(){
    this.status = !this.status;
    return this.status;
  }
}

class TodoList implements TodoListInterface {

  taskArray: Array <string> =[];

  constructor(){ }
  
  addTask(task: string){
    this.taskArray.push(task);
    console.log(`Task "${task}" inserted in the list`);
    return this.taskArray.length;
  }

  listAllTasks(){
    for(let i=0; i< this.taskArray.length; i++){
      console.log(this.taskArray[i]);
    }
  }

  deleteTask(task: string){
    for(let i=0; i< this.taskArray.length; i++){
      if(this.taskArray[i]=== task){
        this.taskArray.splice(i,1);
      }
  }
  console.log(`Task "${task}" removed from the list`);
  return this.taskArray.length;
  }
}

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
