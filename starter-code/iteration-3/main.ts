// Add the reference to the interface
import {TodoItemInterface} from './interfaces';
import {TodoListInterface} from './interfaces';

// Create class TodoItem that implements the corresponding interface

class TodoItem implements TodoItemInterface {
  constructor(
    public title: string,
    public status: boolean,
    public updatedAt: Date
  ) {}
  toggleStatus() {
    if (status == 'false') {
      return 'unfinished';
    } else {
      return 'finished';
    }
  }
}

//  A partir de là.... not good

class TodoList implements TodoListInterface {
  constructor(public TodoItem: Array<string> = []) {}
  addTask(list: string) {
    console.log(`There is ${TodoItem} adedd`);
    return list;
  }

  listAllTasks() {
    for (let i = 0; i < this.TodoItem.length; i++) {
      console.log(this.TodoItem[i]);
    }
  }

  deleteTask(list: string) {
    for (let i = 0; i < this.TodoItem.length; i++) {
      if (this.TodoItem[i] == list) {
        this.TodoItem.splice(i, 1);
      }
    }
    console.log(`There is ${list} deleted`);
    return TodoItem.length;
  }
}

// Create class TodoList that implements the corresponding interface

// // Execution
// let task1 = new TodoItem('This is our first task');
// let task2 = new TodoItem('Eat pizza 🍕 yummy!!!');
// let task3 = new TodoItem('Finish this iteration 1!! 🤓');
// let task4 = new TodoItem('Finish this iteration 2!! 🤓');
// let task5 = new TodoItem('Finish this iteration 3!! 🤓');

// let myTodos = new TodoList();

// console.log('Number of items:', myTodos.addTask(task1));
// console.log('Number of items:', myTodos.addTask(task2));
// console.log('Number of items:', myTodos.addTask(task3));
// console.log('Number of items:', myTodos.addTask(task4));
// console.log('Number of items:', myTodos.addTask(task5));
// myTodos.listAllTasks();
// console.log('Number of items:', myTodos.deleteTask(task3));
// console.log('Number of items:', myTodos.deleteTask(task4));
// console.log('Number of items:', myTodos.deleteTask(task5));
// myTodos.listUncomplete();
