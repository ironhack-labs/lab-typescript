import {TodoInterface} from './todoInterface';
// Add the reference to the "TodoInterface"
// 1. Create a class Todo that implements the Interface created before.
class Todo implements TodoInterface {
  constructor(public tasks: Array<string> = []){};

  addTask(task: string){
    this.tasks.push(task);
    console.log("Insert task");
    return this.tasks.length;
  }

  listAllTasks(){
    this.tasks.forEach(function(a){
      console.log(a);
    })
  }

  deleteTask(task: string){
   let dtask = this.tasks.indexOf(task);
   return this.tasks.splice(dtask, 1).length;
  }
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
