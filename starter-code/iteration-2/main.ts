// Add the reference to the "TodoInterface"
import { EmptyArray } from './todoInterface';

// 1. Create a class Todo that implements the Interface created before.
class Todo implements EmptyArray {
    tasks:Array<string> = [];

    addTask(task): number{
      this.tasks.push(task)
      return this.tasks.length;
      console.log(`Task: ${task} inserted into list.`)
    }

    listAllTasks():void {
      this.tasks.forEach(function (task){
        console.log("" + task)
      })
    }

    deleteTask(task):number {
      this.tasks.splice(this.tasks.indexOf(task),1)
      return this.tasks.length;
      console.log(`Task: ${task} has been removed.`)

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
