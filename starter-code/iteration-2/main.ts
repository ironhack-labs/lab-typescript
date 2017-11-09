// Add the reference to the "TodoInterface"
import {ToDo} from './todoInterface'
// 1. Create a class Todo that implements the Interface created before.

class Todo implements ToDo{
  public taskList: string[];


  addTask(task){
    taskList.push(task)
    console.log(`You've added "${task}" to your To Do List!`);
    return taskList.length
  }
  listAllTasks(){
    for( let i = 0; i < taskList.length ; i++){
      console.log(taskList[i]);
    }
  }
  deleteTask(task){
    let toBeDeleted = taskList.indexOf(task);
    if (toBeDeleted === -1){
      console.log("That is not a valid task, please check your spelling!")
    }
    else{
      taskList.splice(toBeDeleted, 1)
      console.log(`You've deleted "${task}" from your To Do List!`);
      return taskList.length;
    }
  }
};


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
