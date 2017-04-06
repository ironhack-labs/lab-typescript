// Add the reference to the "TodoInterface"
import {toDoInterface} from "./toDoInterface";
// 1. Create a class Todo that implements the Interface created before.
class Todo implements toDoInterface {
  task: string;

  constructor(public todoList:Array<string> = []){}

  todoList: Array<string> = [];

    addTask(task):number {
    this.todoList.push(task);
    console.log('Task' + task + 'inserted in the list');
    return this.todoList.length;
    };

    listAllTasks():void {
      this.todoList.forEach(function(task){
        console.log(task);
      })
    }

    deleteTask(task):number {
      let deleted = task;
      this.todoList = this.todoList.filter(item => item !== deleted);
      return this.todoList.length;
    }
}

// Execution
let myTodos = new Todo(["walk the milk", "Buy dog"]);
console.log("Number of items:", myTodos.addTask('This is our first task'));
console.log("Number of items:", myTodos.addTask('Eat pizza 🍕 yummy!!!'));
console.log("Number of items:", myTodos.addTask('Finish this iteration 1!! 🤓'));
console.log("Number of items:", myTodos.addTask('Finish this iteration 2!! 🤓'));
console.log("Number of items:", myTodos.addTask('Finish this iteration 3!! 🤓'));
myTodos.listAllTasks();
console.log("Number of items:", myTodos.deleteTask('Finish this iteration 1!! 🤓'));
console.log("Number of items:", myTodos.deleteTask('Finish this iteration 2!! 🤓'));
myTodos.listAllTasks();
