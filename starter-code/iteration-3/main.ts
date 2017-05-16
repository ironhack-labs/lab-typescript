// Add the reference to the interface
import {TodoItemInterface} from "./interfaces";
import {TodoListInterface} from "./interfaces";
// Create class TodoItem that implements the corresponding interface
class TodoItem implements TodoItemInterface{
  tittle:  string;
  status: boolean;
  UpdatedAt: Date;

  constructor(tittle:  string){
      this.tittle =tittle;


  }

  toggleStatus():boolean{
    this.UpdatedAt = new Date();
    return (!this.status);

  }

}
// Create class TodoList that implements the corresponding interface
class TodoList implements TodoListInterface{
  TodoItem: Array<any> = [] ;

  constructor(){
  }
  addTask(task: TodoItem): number {
      this.TodoItem.push(task);
      console.log(task);
      return this.TodoItem.length;
    }
    listAllTasks():void{
      this.TodoItem.forEach((task) => console.log(task))
    }
    deleteTask(task: TodoItem): number{
      let index = this.TodoItem.indexOf(task, 0);
        if (index > -1) {
            this.TodoItem.splice(index, 1);
        }
        console.log("delete an element");
        return this.TodoItem.length;
    }
}
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
//myTodos.listUncomplete();
