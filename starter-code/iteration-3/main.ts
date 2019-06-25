// Add the reference to the interface
import { TodoItemInterface, TodoListInterface } from './interfaces';

// Create class TodoItem that implements the corresponding interface
class TodoItem implements TodoItemInterface {
    title;
    status = true;
    updateAt;

    constructor(title: string) {
        this.title = title;
        this.updateAt = new Date();
    }

    toggleStatus() {
        if (this.status) {
            this.status = false;
        } else {
            this.status = true;
        }

        this.updateAt = new Date();
    }
}

// Create class TodoList that implements the corresponding interface
class TodoList implements TodoListInterface {
    todoItems = [];

    addTask(task: TodoItemInterface): number {
        this.todoItems.push(task);
        console.log("=========== NEW TASK ===========");
        console.log(`Task "${ task.title }" inserted in the list`);
        return this.todoItems.length;
    }

    listAllTasks() {
        console.log("=========== LISTADO DE TASKS ===========");

        for (const task of this.todoItems) {
          console.log(task);
        }
    }

    deleteTask(task: TodoItemInterface): number {
        for (let i = 0; i < this.todoItems.length; i++) {
            if (this.todoItems[i] == task) {
              this.todoItems.splice(i, 1);
              console.log("=========== TASK REMOVED ===========");
              console.log(`Task "${ task.title }" removed from the list`);
            }
          }

        return this.todoItems.length;
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
