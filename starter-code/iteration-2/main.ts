// Add the reference to the "TodoInterface"
import {
  TodoInterface
} from './todoInterface';

// 1. Create a class Todo that implements the Interface created before.

class Todo implements TodoInterface {
  tasks: Array<string> = [];
  addTask(task: string) {
    this.tasks.push(task);
    console.log(`=========== NEW TASK ===========\nTask "${task}" inserted on the list \n Number of items: ${this.tasks.length}`);
  };
  listAllTasks(): void {
    this.tasks.forEach(task => {
      console.log(task);
    });
  };
  deleteTask(task: string) {
    let indexOfTask = this.tasks.indexOf(task);
    this.tasks.splice(indexOfTask, 1);
    console.log(`=========== TASK REMOVED ===========\nTask "${task}" removed from the list\nNumber of items: ${this.tasks.length}\nRemaining array: ${this.tasks}`);
  }

}



// Execution  (la he personalizado ^^)
let myTodos = new Todo();

myTodos.addTask('do homework');
myTodos.addTask('buy fruit');
myTodos.addTask('This is our first task');
myTodos.addTask('Eat pizza 🍕 yummy!!!');
myTodos.listAllTasks();
myTodos.deleteTask('do homework');
myTodos.deleteTask('This is our first task');

myTodos.listAllTasks();


