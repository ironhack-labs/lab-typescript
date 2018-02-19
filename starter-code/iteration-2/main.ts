// Add the reference to the "TodoInterface"
interface ToDoInterface {
  tasklist: string[];
  addTask(task: string): number;
  listAllTasks();
  deleteTask(task: string): number;

}
// 1. Create a class Todo that implements the Interface created before.
class Todo implements ToDoInterface {
  tasklist: string[];
  constructor() { 
    this.tasklist = []
  }
    
    addTask(task: string): number{
      this.tasklist.push(task);
     console.log(`=========== NEW TASK ===========
Task "${task}" inserted in the list`);
      return this.tasklist.length;
    }
  
    listAllTasks(){
       this.tasklist.forEach(task => {
         console.log(task);
       });
     } 
     
    deleteTask(task: string): number {
      this.tasklist.forEach((taskToCheck, index) => {
        if (taskToCheck === task) {
          this.tasklist.splice(index, 1);
          console.log(`=========== TASK REMOVED ===========
        Task "${task}" removed from the list`);

        }
      });
      return this.tasklist.length;
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
