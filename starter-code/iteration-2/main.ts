// Add the reference to the "TodoInterface"
import {todoInterface} from './todoInterface';

// 1. Create a class Todo that implements the Interface created before.
class Todo implements todoInterface{
  constructor(
    public todoList: string[]
  ){}
  addTask(task: string){
    todoList.push(task)
    console.log('Task inserted');
    return todoList.length
  }
  listAllTasks(){
    todoList.forEach((task) => {
      console.log(task);
    });
  }
  deleteTask(task: string){
    const i = todoList.indexOf('Finish this iteration 1!! 🤓');
    if( i != -1 ){
      todoList.splice(i, 1);
    }
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
