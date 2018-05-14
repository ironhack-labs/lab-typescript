// Add the reference to the "TodoInterface"
import {TodoInterface} from './todoInterface';
import { AsyncResource } from 'async_hooks';
// 1. Create a class Todo that implements the Interface created before.
class Todo implements TodoInterface {
  
  
     constructor(public arr: string[]) {}
     
     addTask(task:string):number {
        this.arr.push(task)
        return this.arr.length
        }
  
        listAllTasks(){
            for(let i = 0 ; i < this.arr.length; i++){
                console.log(this.arr[i]);
            }
         }

         deleteTask(task:string): number{
            let index =  this.arr.indexOf(task);
             this.arr.splice(index, 1)
            // console.log("Deleted: ", task + " length is ", myArr.length)
             return this.arr.length
          }
   
  }
  
  

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
