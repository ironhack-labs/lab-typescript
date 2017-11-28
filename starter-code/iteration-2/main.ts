// Add the reference to the "TodoInterface
// 1. Create a class Todo that implements the Interface created before.

// Execution

import  {Todointerface} from "./todoInterface";

class Todo implements Todointerface{
  constructor(){}
  public taskArray: Array<String>=[];
  addTask = function(task:String): Number
    {
      console.log("Task :"+ task + "inserted in the list");
      this.taskArray.push(task);
      return this.taskArray.length;
    }

    listAllTasks = function () : void {
        this.taskArray.forEach( e => {
        console.log(e);});
    }

    deleteTask = function (task:String): Number
    {
      let index = this.taskArray.indexOf (task);
      this.taskArray.splice(index,1);
      console.log("Task :" + task + "removed from the list");
      return this.taskArray.length;
    };

}

const myTodos = new Todo();
console.log("Number of items:", myTodos.addTask('This is our first task'));
console.log("Number of items:", myTodos.addTask('Eat pizza 🍕 yummy!!!'));
console.log("Number of items:", myTodos.addTask('Finish this iteration 1!! 🤓'));
console.log("Number of items:", myTodos.addTask('Finish this iteration 2!! 🤓'));
console.log("Number of items:", myTodos.addTask('Finish this iteration 3!! 🤓'));
myTodos.listAllTasks();
console.log("Number of items:", myTodos.deleteTask('Finish this iteration 1!! 🤓'));
console.log("Number of items:", myTodos.deleteTask('Finish this iteration 2!! 🤓'));
myTodos.listAllTasks();
