// Add the reference to the interface
interface TodoItemInterface {
  taskTitle: string;

  taskStatus: boolean;

  updatedAt: Date;

  toggleStatus(status: boolean);
}

interface TodoListInterface {
  myTasks: string[];

  addTask(task: TodoItemInterface);

  listAllTasks(arrayOfTasks: string[]);

  deleteTask(taskToDelete: string);

}

class TodoItem implements TodoItemInterface {
  constructor(
    public taskTitle: string,
    public taskStatus: boolean,
    public updatedAt: Date,

  ) { }
  toggleStatus(status: boolean) {
    if(status === true) {
      status = false;
    } else if(status === false) {
      status = true;
      return status;
    }
    }
  }

class TodoList implements TodoListInterface {
  constructor(
    myTasks: string[]
  ) {}
  addTask(task: TodoItemInterface){
    myTasks.push(task);
    console.log("=========== NEW TASK ===========");
    console.log("Task" + task + "inserted in the list");
    return myTasks.length;

  }
  listAllTasks(arrayOfTasks: string[]) {
    console.log("These are our tasks: ")
    arrayOfTasks.forEach( oneTask => {
      console.log( oneTask.taskTitle );
    })
  }
  deleteTask(taskToDelete: string) {
    let itemIndex = myTasks.indexOf( taskToDelete );
    console.log( itemIndex )
    myTasks.splice( itemIndex, 1 );
    console.log( myTasks );
  }
}



// Create class TodoItem that implements the corresponding interface

// Create class TodoList that implements the corresponding interface

// Execution
// let task1 = new TodoItem('This is our first task');
// let task2 = new TodoItem('Eat pizza 🍕 yummy!!!');
// let task3 = new TodoItem('Finish this iteration 1!! 🤓');
// let task4 = new TodoItem('Finish this iteration 2!! 🤓');
// let task5 = new TodoItem('Finish this iteration 3!! 🤓');
//
// let myTodos = new TodoList();
//
// console.log("Number of items:", myTodos.addTask(task1));
// console.log("Number of items:", myTodos.addTask(task2));
// console.log("Number of items:", myTodos.addTask(task3));
// console.log("Number of items:", myTodos.addTask(task4));
// console.log("Number of items:", myTodos.addTask(task5));
// myTodos.listAllTasks();
// console.log("Number of items:", myTodos.deleteTask(task3));
// console.log("Number of items:", myTodos.deleteTask(task4));
// console.log("Number of items:", myTodos.deleteTask(task5));
// myTodos.listUncomplete();
