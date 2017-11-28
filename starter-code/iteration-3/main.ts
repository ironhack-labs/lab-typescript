// Add the reference to the interface
import { TodoItemInterface } from './interfaces';
import { TodoListInterface } from './interfaces';
// Create class TodoItem that implements the corresponding interface
class TodoItem implements TodoItemInterface{
  status = false;
  updateAt = new Date();
  constructor(public title:string){}
  toggleStatus(){
    if (this.status == true) {
      this.status = false;
      this.updateAt = new Date();
    } else{
        this.status = true;
        this.updateAt = new Date();
    }
  }

}

class TodoList implements TodoListInterface{
  TodoItems = [];
  constructor(){};
  addTask(task:TodoItem):number{
    this.TodoItems.push(task);
    console.log('=========== NEW TASK ===========')
    console.log(`Task ${task.title} inserted in the list`)
    return this.TodoItems.length;
  }
  // 3. Create a function to list all tasks, it must show in the console de task.
  listAllTasks():void{
    this.TodoItems.forEach(e => console.log(e));
  }
  // 4. Create a function to delete a task, you must find the task inside the array and delete it.
  deleteTask(taskToDelete:TodoItem):number{
    this.TodoItems.splice(this.TodoItems.indexOf(taskToDelete),1);
    console.log('=========== TASK REMOVED ===========')
    console.log(`Task ${taskToDelete.title} removed from the list`)
    return this.TodoItems.length;
  }
  listUncomplete():void{
    this.TodoItems.forEach(e => {if(e.status == false){console.log(e)}})
  }
}
// Create class TodoList that implements the corresponding interface

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
