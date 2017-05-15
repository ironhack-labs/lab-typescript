// Add the reference to the "TodoInterface"
import { interfaceToDo } from "./todoInterface";

// 1. Create a class Todo that implements the Interface created before.

class Todo implements interfaceToDo {

  constructor(public toDoArray: Array<string>=[]){}

  addToList(task){
    this.toDoArray.push(task);
    return this.toDoArray.length
  }

  listTasks(){
      this.toDoArray.forEach((element)=>{
        console.log(element)
      })

    };

   deleteOneTask(task){
    const index = this.toDoArray.indexOf(task)
      this.toDoArray.splice(index,1);
      return this.toDoArray.length;
  };


}


// Execution
let myTodos = new Todo();
console.log("Number of items:", myTodos.addToList('This is our first task'));
console.log("Number of items:", myTodos.addToList('Eat pizza 🍕 yummy!!!'));
console.log("Number of items:", myTodos.addToList('Finish this iteration 1!! 🤓'));
console.log("Number of items:", myTodos.addToList('Finish this iteration 2!! 🤓'));
console.log("Number of items:", myTodos.addToList('Finish this iteration 3!! 🤓'));
myTodos.listTasks();
console.log("Number of items:", myTodos.deleteOneTask('Finish this iteration 1!! 🤓'));
console.log("Number of items:", myTodos.deleteOneTask('Finish this iteration 2!! 🤓'));
myTodos.listTasks();
