// Add the reference to the "TodoInterface"
import{TodoInterface} from "./todoInterface"
// 1. Create a class Todo that implements the Interface created before.
     class Todo implements TodoInterface{
         tasks: Array <string>
           addTask(task):number{
               this.tasks.push(task);
               console.log("Task "+task+" inserted in the list /n"+"Number of items: "+ this.tasks.length);
               return this.tasks.length;
           }

           listAllTasks(){
                this.tasks.map(task=>{
                     console.log(task);
                })
           }

           deleteTask(task):number{
               this.tasks =  this.tasks.splice(this.tasks.indexOf(task))
               console.log("Task "+task+" removed from the list /n"+"Number of items: "+ this.tasks.length)
               return this.tasks.length
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
