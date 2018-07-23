import { Inter} from './todoInterface';
// Add the reference to the "TodoInterface"
class Todo implements Inter {
    public arr: Array<string>=[];
    constructor() {
    }
    addTask(task:string):number {
      this.arr.push(task);
      console.log('insertion sucess');
      return this.arr.length;
    }
    listAllTasks(): void{
      this.arr.forEach(element => {
        console.log(element); 
     });
    }
    deleteTask(task: string): number{
      this.arr.splice(this.arr.indexOf(task),1)
      console.log('removal sucess');
      console.log(this.arr.length);
      return this.arr.length;
    }
}
// 1. Create a class Todo that implements the Interface created before.

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
