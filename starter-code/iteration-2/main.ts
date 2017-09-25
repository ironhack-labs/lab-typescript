// Add the reference to the "TodoInterface"
import{ TodoInterface} from "./todoInterface.js"
// 1. Create a class Todo that implements the Interface created before.
class Todo implements TodoInterface {
  myArray: string[] = [];
  constructor();
  addTask(task:string){
    this.myArray.push(task);
    console.log('=========== NEW TASK ===========');
    console.log(task);
    return this.myArray.length;
  };
  listAllTasks(){
    this.myArray.forEach((oneTask) => {
      console.log(oneTask);
    });
  };
  deleteTask(task){
    const removeTaskIndex =  this.myArray.indexOf(task);
    this.myArray.splice(removeTaskIndex, 1);
    console.log('=========== TASK DELETED ===========');
    console.log(task);
    return this.myArray.length;
  };
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
