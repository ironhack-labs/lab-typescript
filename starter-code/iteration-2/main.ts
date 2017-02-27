// Add the reference to the "TodoInterface"
import {toDo} from './todoInterface';

// 1. Create a class Todo that implements the Interface created before.
class Todo implements toDo{
  taskList: Array<string> = [] ;

  constructor(){

  }
  addTask(task: string): number {
      this.taskList.push(task);
      console.log(task);
      return this.taskList.length;
    }
    listAllTasks():void{
      this.taskList.forEach((task) => console.log(task))
    }
    deleteTask(task: string): number{
      let index = this.taskList.indexOf(task, 0);
        if (index > -1) {
            this.taskList.splice(index, 1);
        }
        console.log("delete an element");
        return this.taskList.length;
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
