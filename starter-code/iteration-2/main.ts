// Add the reference to the "TodoInterface"

// 1. Create a class Todo that implements the Interface created before.
class Todo implements TodoInterface {
  constructor(
    public myTasks: string[],
  ) {}
  listAllTasks(): void {
    console.log(myTasks);

  }

  deleteTask(task: string):void {
    console.log("We just deleted a task")
    const index = myTasks.indexOf(task);
    myTasks.splice( index , 1 );

  }

  addTask (task: string): void {
      const result = myTasks.push(task);
      console.log(`
        =========== NEW TASK ===========
        We have inserted the task: ${task}.
        And we have a total of this many tasks: ${result}.
        `)
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
