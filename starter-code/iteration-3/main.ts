// Add the reference to the interface
import {TodoItemInterface} from './interfaces';
// Create class TodoItem that implements the corresponding interface
class TodoItem implements TodoItemInterface{

  constructor(title: string, updatedAt: Date) {}
       toggleStatus(): number {
         if(this.status===true) {
            this.status = false;
          } else {
            this.status = true;
          }
          this.updatedAt = New Date;
        }
    }
// Create class TodoList that implements the corresponding interface
class TodoList implements TodoListInterface{

     ArrayTodoItem: Array<ArrayTodoItem> ;

     addTask(task){
     console.log ("Colocamos el elemento " + task );
     return ArrayTodoItem.length;
    }

     listAllTasks(){
       for (let counter of ArrayTodoItem) {
         console.log(counter);
       }
       return ArrayTodoItem.length;
     }

     deleteTask(task){
       let i:number = ArrayTodoItem.indexOf(task);
       ArrayTodoItem.splice(i,1);
      return ArrayTodoItem.length;
    }
}

listAllTasks

// Execution
let task1 = new TodoItem('This is our first task');
let task2 = new TodoItem('Eat pizza 🍕 yummy!!!');
let task3 = new TodoItem('Finish this iteration 1!! 🤓');
let task4 = new TodoItem('Finish this iteration 2!! 🤓');
let task5 = new TodoItem('Finish this iteration 3!! 🤓');

let myTodos = new TodoList();

console.log("Number of items:", myTodos.addTask(task1));
console.log("Number of items:", myTodos.addTask(task2));
console.log("Number of items:", myTodos.addTask(task3));
console.log("Number of items:", myTodos.addTask(task4));
console.log("Number of items:", myTodos.addTask(task5));
myTodos.listAllTasks();
console.log("Number of items:", myTodos.deleteTask(task3));
console.log("Number of items:", myTodos.deleteTask(task4));
console.log("Number of items:", myTodos.deleteTask(task5));
myTodos.listUncomplete();
