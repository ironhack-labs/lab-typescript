// Add the reference to the interface
import {TodoItemInterface, TodoListInterface} from "./interfaces";

// Create class TodoItem that implements the corresponding interface


class TodoItem implements TodoItemInterface {
     done: boolean;
     updatedAt: Date; 
     constructor(public title: string) {}
     toggleDone() :void {
     if (this.done) {
          this.done = false
      } else {
          this.done = true;
      }
     }
    }

// Create class TodoList that implements the corresponding interface

class TodoList implements TodoListInterface {
      constructor(public todoList: Array<TodoItem>=[]){}
      
      addTask(task: TodoItem) {
          this.todoList.push(task)
          console.log (`=========== NEW TASK =========== /n Task ${task.title} inserted in the list /n
          Number of items: ${this.todoList.length}`);
      }

      listAllTasks(): void {
          this.todoList.forEach((task)=>{
              console.log(task.title)
          })
      }

      deleteTask(task: TodoItem) {
        for(var i = 0; i < this.todoList.length; i++){
          if (task === this.todoList[i]){
            this.todoList.splice(i, 1);
          }
        }
      console.log (`=========== TASK REMOVED =========== /n Task ${task.title} removed the list /n
      Number of items: ${this.todoList.length}`);
      }

      listUncomplete(): void {
        this.todoList.forEach((task)=>{
          if (task.done != true){
            console.log(task.title);
          }
        })
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
myTodos.listUncomplete();
