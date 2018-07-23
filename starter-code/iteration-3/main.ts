import {TodoItemInterface, TodoListInterface} from './interfaces';

// Add the reference to the interface
// Create class TodoItem that implements the corresponding interface
class TodoItem implements TodoItemInterface {

    constructor(public title:string){
    }
    public status: boolean=true;
    public updatedAt: Date = new Date();
    toggleStatus():void{
        this.status= !this.status,
        this.updatedAt = new Date()
    }

}

// Create class TodoList that implements the corresponding interface
class TodoList implements TodoListInterface{
    public arr: Array<TodoItem>=[];
    constructor() {
    }
    addTask(task:TodoItem):number {
      this.arr.push(task);
      console.log('insertion sucess');
      return this.arr.length;
    }
    listAllTasks(): void{
      this.arr.forEach(element => {
        console.log(element); 
     });
    }
    deleteTask(task: TodoItem): number{
      this.arr.splice(this.arr.indexOf(task),1)
      console.log('removal sucess');
      console.log(this.arr.length);
      return this.arr.length;
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
