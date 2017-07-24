
// Add the reference to the "TodoInterface"
import { toDoInterface } from "./todoInterface";

// 1. Create a class Todo that implements the Interface created before.
class TodoList implements toDoInterface {
  toDos = [];
  constructor() {}

  addTask(toDo: String) {
    this.toDos.push(toDo);
    console.log ("Se ha añadido la tarea " + toDo);
    return this.toDos.length;
  }


  listAllTasks() {
    this.toDos.forEach(todo => {
      console.log(todo);
    });
  }
  deleteTask(toDoToDelete: String) {
    let index = this.toDos.indexOf(toDoToDelete);
    console.log ("Se ha eliminado la tarea " + this.toDos[index]);
    this.toDos.splice(index, 1);
    return this.toDos.length;
  }
}
// Execution
let myTodos = new TodoList();
console.log("Number of items:", myTodos.addTask('This is our first task'));
console.log("Number of items:", myTodos.addTask('Eat pizza 🍕 yummy!!!'));
console.log("Number of items:", myTodos.addTask('Finish this iteration 1!! 🤓'));
console.log("Number of items:", myTodos.addTask('Finish this iteration 2!! 🤓'));
console.log("Number of items:", myTodos.addTask('Finish this iteration 3!! 🤓'));
myTodos.listAllTasks();
console.log("Number of items:", myTodos.deleteTask('Finish this iteration 1!! 🤓'));
console.log("Number of items:", myTodos.deleteTask('Finish this iteration 2!! 🤓'));
myTodos.listAllTasks();
