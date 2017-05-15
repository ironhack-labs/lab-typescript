// Add the reference to the interface
import {TodoItemInterface} from "./interfaces";
import {TodoListInterface} from "./interfaces";
// Create class TodoItem that implements the corresponding interface
class TodoItem implements TodoItemInterface {
  done: boolean;
  updatedAt: Date;
  constructor(public taskTitle: string){}

  toggleStatus(){
    this.done = this.done ? false : true;
    this.updatedAt = new Date(new Date().getTime());
  }
}

/*
taskTitle: string;
done: boolean;
updatedAt: string;
toggleStatus():void;
*/
// Create class TodoList that implements the corresponding interface
class TodoList implements TodoListInterface {
  constructor(public tasks: Array<TodoItemInterface> = []){}
  addTask(task: TodoItemInterface):number{
    this.tasks.push(task);
    console.log(`=========== NEW TASK ===========
      ${task.taskTitle}`);
      return this.tasks.length;
  }

  listAllTasks():void {
    for(let task of this.tasks){
      console.log(task.taskTitle);
    }
  }

  deleteTask(task: TodoItemInterface):number{
       let index = this.tasks.indexOf(task);
       this.tasks.splice(index, 1);
       console.log(`=========== TASK REMOVED ===========
         ${task.taskTitle}`);
       return this.tasks.length;
     }
  listUncomplete():void{
    let counter= 0;
    for(let task of this.tasks){
      if(task.done) counter++;
    }
    console.log(counter);
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
