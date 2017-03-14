// Add the reference to the "TodoInterface"
import { todoInterface } from './todoInterface';
// 1. Create a class Todo that implements the Interface created before.
class Todo implements todoInterface {
  constructor(public myArray: Array<string> = []) {

  }

  addTask (item:string) {
    this.myArray.push(item);
    console.log('=========== NEW TASK ===========')
    console.log(`Task "${item}" inserted in the list`);
    console.log('');
    return this.myArray.length;
  }

  listAllTasks() {
    this.myArray.forEach(oneElem => {
      console.log(oneElem);
    });
  }

  deleteTask (task: string) {
    console.log('');
    let index = this.myArray.indexOf(task);
    if(index > -1) {
      this.myArray.splice(index, 1);

      console.log('=========== TASK REMOVED ===========')
      console.log(`Task "${task}" removed from the list`);
      console.log('');
      return this.myArray.length;
    }
  }
}

// Execution
let myTodos = new Todo([]);
console.log("Number of items:", myTodos.addTask('This is our first task'));
console.log("Number of items:", myTodos.addTask('Eat pizza 🍕 yummy!!!'));
console.log("Number of items:", myTodos.addTask('Finish this iteration 1!! 🤓'));
console.log("Number of items:", myTodos.addTask('Finish this iteration 2!! 🤓'));
console.log("Number of items:", myTodos.addTask('Finish this iteration 3!! 🤓'));
myTodos.listAllTasks();
console.log("Number of items:", myTodos.deleteTask('Finish this iteration 1!! 🤓'));
console.log("Number of items:", myTodos.deleteTask('Finish this iteration 2!! 🤓'));
myTodos.listAllTasks();
