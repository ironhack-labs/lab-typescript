// Add the reference to the "TodoInterface"
import {interfaceToDo} from './todoInterface.js'
// 1. Create a class Todo that implements the Interface created before.

class Todo implements interfaceToDo {

toDoList: String[] = [];

constructor(
  public task: string,
) {}

addTask(toDoItem: string) {
  this.toDoList.push(toDoItem);
  console.log("Task" + toDoItem + "inserted in the list");
  return this.toDoList.length
}

listAllTasks() {
    this.toDoList.forEach((listItem) => {
      console.log("listItem");
    })
}

deleteTask (task: string) {
  let index = this.toDoList.indexOf(task);
  if (index !== -1) {
    this.toDoList.splice(index, 1);
  }
  console.log("Task" + task + "deleted from the list");
  return this.toDoList.length;
}


}

// Execution
let myTodos = new Todo("Walk dog");
console.log("Number of items:", myTodos.addTask('This is our first task'));
console.log("Number of items:", myTodos.addTask('Eat pizza 🍕 yummy!!!'));
console.log("Number of items:", myTodos.addTask('Finish this iteration 1!! 🤓'));
console.log("Number of items:", myTodos.addTask('Finish this iteration 2!! 🤓'));
console.log("Number of items:", myTodos.addTask('Finish this iteration 3!! 🤓'));
myTodos.listAllTasks();
console.log("Number of items:", myTodos.deleteTask('Finish this iteration 1!! 🤓'));
console.log("Number of items:", myTodos.deleteTask('Finish this iteration 2!! 🤓'));
myTodos.listAllTasks();
