// Add the reference to the "TodoInterface"
import { iToDo } from 'todoInterface';

// 1. Create a class Todo that implements the Interface created before.
class Todo implements iToDo{
  toDoList : Array<string> = [];

  addTask(task:string):number{
    let outputString:string = "=========== NEW TASK ===========\n";
    this.toDoList.push(task);
    outputString += `"Task "${task}" inserted in the list"\n`;
    outputString += `Number of items: ${this.toDoList.length}`;
    console.log(outputString);
    return this.toDoList.length ;
  };

  listAllTasks():void{
    this.toDoList.forEach((task) => { console.log(task)});
  };

  deleteTask(task:string):number{
    let numberOfTasks:number;
    let outputString:string = "=========== TASK REMOVED ===========\n";
    this.toDoList.splice(this.toDoList.indexOf(task), 1);
    outputString += `Task "${task}" removed from the list\n`;
    outputString += `Number of items: ${this.toDoList.length}`;
    console.log(outputString);
    return this.toDoList.length;
  };
}
// Execution
let myTodos = new Todo();
console.log("Number of items:", myTodos.addTask('This is our first task'));
console.log("Number of items:", myTodos.addTask('Eat pizza 🍕 yummy!!!'));
console.log("Number of items:", myTodos.addTask('Finish this iteration 1!! 🤓'));
console.log("Number of items:", myTodos.addTask('Finish this iteration 2!! 🤓'));
console.log("Number of items:", myTodos.addTask('Finish this iteration 3!! 🤓'));
myTodos.listAllTasks();
console.log("Number of items:", myTodos.deleteTask('Finish this iteration 1!! 🤓'));
console.log("Number of items:", myTodos.deleteTask('Finish this iteration 2!! 🤓'));
myTodos.listAllTasks();
