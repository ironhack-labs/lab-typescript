// Add the reference to the "TodoInterface"
import TodoInterface from './todoInterface'
// 1. Create a class Todo that implements the Interface created before.
class Todo implements TodoInterface {
  constructor(){}
  addTask(word:string){
    myArray.push(word);
    console.log(word);
    return myArray.length;
  }
  listAllTasks(){
    myArray.forEach(function (word) {
        console.log(word);
    });
  }
  deleteTask(word:string){
      myArray.splice(myArray.indexOf(word), 1);
      console.log(word);
      return myArray.length;
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
