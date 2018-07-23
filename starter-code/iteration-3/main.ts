// Add the reference to the interface
import{TodoItemInterface} from "./interfaces"
import{TodoInterface} from "./interfaces"

// Create class TodoItem that implements the corresponding interface
class TodoItem implements TodoItemInterface{
     constructor(public title:string) { }
     status: boolean;
     updateAt: Date;
     toggleStatus() {
          this.status ? this.status = false: this.status = true;
     }
}
// Create class TodoList that implements the corresponding interface
class TodoList implements TodoInterface{
     toDo : Array <TodoItemInterface>=[];
     addTask (item:TodoItemInterface){
          this.toDo.push(item);
          return this.toDo.length;
     }
     listAllTasks(){
          this.toDo.map((task)=>{
               console.log(task)
          })
     }
   deleteTask(task:TodoItemInterface){
     this.toDo =  this.toDo.splice(this.toDo.indexOf(task))
     console.log("Task "+task+" removed from the list /n"+"Number of items: "+ this.toDo.length)
     return this.toDo.length
   }
   showTasks(){
        for(let i=0;i<this.toDo.length;i++){
             if(this.toDo[i].status){
               console.log("Task "+this.toDo[i]+" removed from the list /n"+"Number of items: "+ this.toDo.length)
             }
        }
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

