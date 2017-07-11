// Add the reference to the "TodoInterface"
import {todointerface} from './todoInterface.js';


// 1. Create a class Todo that implements the Interface created before.
class Todo implements todointerface{
  toDoList: String[] = [];

  constructor(
    public task: string,

  ){}
    addTask(todoItem: string){
      this.toDoList.push(todoItem);
      console.log('Task' + todoItem + 'inserted in the list');
      return toDoList.length;
    }

     listAllTasks(){
      this.toDoList.forEach((listItem) =>{
        console.log(listItem);
      })
    }

     deleteTask(task:string){
      let index = toDoList.indexOf(task);
        if (index !== -1) {
        toDoList.splice(index, 1);
      }
      console.log('Task' + task + 'deleted from the string');
      return toDoList.length;
    }
}









// Execution
let myTodos = new Todo('walk dog');
console.log("Number of items:", myTodos.addTask('This is our first task'));
console.log("Number of items:", myTodos.addTask('Eat pizza 🍕 yummy!!!'));
console.log("Number of items:", myTodos.addTask('Finish this iteration 1!! 🤓'));
console.log("Number of items:", myTodos.addTask('Finish this iteration 2!! 🤓'));
console.log("Number of items:", myTodos.addTask('Finish this iteration 3!! 🤓'));
myTodos.listAllTasks();
console.log("Number of items:", myTodos.deleteTask('Finish this iteration 1!! 🤓'));
console.log("Number of items:", myTodos.deleteTask('Finish this iteration 2!! 🤓'));
myTodos.listAllTasks();
