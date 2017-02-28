// Add the reference to the "TodoInterface"
import {TodoInterface} from "./todoInterface";

class Todo implements TodoInterface {

  myArray: Array<string> = [];

  addTask(task:string):number {
    this.myArray.push(task);
    console.log('=========== NEW INSERTION ===========');
    return this.myArray.length;
  };

  listAllTasks ():void{
    this.myArray.map((task:string):void => {
      console.log(task);
    });
  };

  deleteTask(task:string){
    this.myArray.map((elem, index)=>{
      if(task === elem){
        this.myArray.splice(index, 1);
        console.log("=========== NEW DELETION ===========")
      }
    });
    return this.myArray.length;
  };

};

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
