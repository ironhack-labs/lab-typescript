// Add the reference to the "TodoInterface"


import { TodoInterface } from "./todoInterface";
// 1. Create a class Todo that implements the Interface created before.

class Todo implements TodoInterface {

          constructor(public arrayOfTasks: Array<string>) {}

          addTask(task:string): number {
            this.arrayOfTasks.push(task);
            console.log("=========== NEW TASK ===========");
            console.log(`Task ${task} inserted in the list`);
            console.log(`Number of items: ${this.arrayOfTasks.length}`);
            return this.arrayOfTasks.length;
          }
           
          listAllTasks(): void {

            for (let i = 0 ; i < this.arrayOfTasks.length; i++) {
              console.log(this.arrayOfTasks[i]);
            }
            
          }
              deleteTask(task:string): number {
                this.arrayOfTasks = this.arrayOfTasks.filter(e => e !== task);
                console.log("=========== REMOVE TASK ===========");
                console.log(`Task ${task} removed from the list`);
                console.log(`Number of items: ${this.arrayOfTasks.length}`);
                return this.arrayOfTasks.length;
          }


}


// Execution
let myTodos = new Todo(this.Todo);
console.log("Number of items:", myTodos.addTask('This is our first task'));
console.log("Number of items:", myTodos.addTask('Eat pizza 🍕 yummy!!!'));
console.log("Number of items:", myTodos.addTask('Finish this iteration 1!! 🤓'));
console.log("Number of items:", myTodos.addTask('Finish this iteration 2!! 🤓'));
console.log("Number of items:", myTodos.addTask('Finish this iteration 3!! 🤓'));
myTodos.listAllTasks();
console.log("Number of items:", myTodos.deleteTask('Finish this iteration 1!! 🤓'));
console.log("Number of items:", myTodos.deleteTask('Finish this iteration 2!! 🤓'));
myTodos.listAllTasks();
