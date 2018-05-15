// Add the reference to the "TodoInterface"
import { TodoStuff } from './todoInterface';


// 1. Create a class Todo that implements the Interface created before.
class Todo implements TodoStuff {

  constructor(public allTask: Array<string>) {}

  listAllTask(){
    this.allTask.forEach(function(task){
      
    })
  };
  addTask(blah:string):number{return 24};
  deleteTask(string): number{return 1};
  
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
