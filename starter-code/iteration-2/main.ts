// Add the reference to the "TodoInterface"
interface Todo {
  myArray : Array <string>;
  addTask(myArray:string);
  listAllTask(myArray);
  deleteTask(myArray);
 }

// 1. Create a class Todo that implements the Interface created before.
class MyTodo implements Todo {
  myArray:Array<string> = [];
  add(task: string){
    return task;
  }

}

// Execution
let myTodo = new Todo();
console.log("Number of items:", myTodos.addTask('This is our first task'));
console.log("Number of items:", myTodos.addTask('Eat pizza 🍕 yummy!!!'));
console.log("Number of items:", myTodos.addTask('Finish this iteration 1!! 🤓'));
console.log("Number of items:", myTodos.addTask('Finish this iteration 2!! 🤓'));
console.log("Number of items:", myTodos.addTask('Finish this iteration 3!! 🤓'));
myTodos.listAllTasks();
console.log("Number of items:", myTodos.deleteTask('Finish this iteration 1!! 🤓'));
console.log("Number of items:", myTodos.deleteTask('Finish this iteration 2!! 🤓'));
myTodos.listAllTasks();
