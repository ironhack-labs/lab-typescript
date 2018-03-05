// Add the reference to the interface
import {TodoItemInterface, TodoListInterface} from './interfaces'
// Create class TodoItem that implements the corresponding interface
class TodoItem implements TodoItemInterface {
   status: boolean;
   constructor(public title: string, public updatedAt: Date) {}
   toggleStatus():void{
    if (this.status){
        this.status=false
    } else {
        this.status=true;
    }
   }
  }
// Create class TodoList that implements the corresponding interface
class TodoList implements TodoListInterface {
    myList: Array<TodoItem>=[]

    addTask(task: TodoItem): number{
        this.myList.push(task)
        console.log(`=========== NEW TASK ===========
    Task "${task.title}" inserted in the list
    Number of items: ${this.myList.length}`)
        return this.myList.length
    }
    listAllTasks(): void{
        this.myList.forEach((task)=>{
            console.log(task.title)
        })
    }
    deleteTask(task: TodoItem): number{
        this.myList.splice(this.myList.indexOf(task), 1)
        console.log(`=========== TASK REMOVED ===========
    Task "${task.title}" removed from the list
    Number of items: ${this.myList.length}`)
        return this.myList.length
    }
}
// Execution
let task1 = new TodoItem('This is our first task', new Date());
let task2 = new TodoItem('Eat pizza 🍕 yummy!!!', new Date());
let task3 = new TodoItem('Finish this iteration 1!! 🤓', new Date());
let task4 = new TodoItem('Finish this iteration 2!! 🤓', new Date());
let task5 = new TodoItem('Finish this iteration 3!! 🤓', new Date());

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
myTodos.listAllTasks();
