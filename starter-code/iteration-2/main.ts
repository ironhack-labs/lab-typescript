// Add the reference to the "TodoInterface"
interface TodoInterface {
  myTasks: string[];

  addTask(task: string);

  listAllTasks(arrayOfTasks: string[]);

  deleteTask(taskToDelete: string);

}
// 1. Create a class Todo that implements the Interface created before.
class TodoList implements TodoInterface {
  constructor(
    public myTasks: string[]
  ){}

  addTask(task:string){
    return myTasks.push(task);
  }

  listAllTasks(arrayOfTasks: string[]) {
    console.log("These are our tasks: ")
    arrayOfTasks.forEach( oneTask => {
      console.log( oneTask);
    })
  }

  deleteTask( taskToDelete: string) {
    let itemIndex = myTasks.indexOf( taskToDelete );
    console.log( itemIndex )
    myTasks.splice( itemIndex, 1 );
    console.log( myTasks );
  }

}

const marisasList = new TodoList ([]);
console.log(marisasList);
// Execution
// let myTodos = new Todo();
// console.log("Number of items:", myTodos.addTask('This is our first task'));
// console.log("Number of items:", myTodos.addTask('Eat pizza 🍕 yummy!!!'));
// console.log("Number of items:", myTodos.addTask('Finish this iteration 1!! 🤓'));
// console.log("Number of items:", myTodos.addTask('Finish this iteration 2!! 🤓'));
// console.log("Number of items:", myTodos.addTask('Finish this iteration 3!! 🤓'));
// myTodos.listAllTasks();
// console.log("Number of items:", myTodos.deleteTask('Finish this iteration 1!! 🤓'));
// console.log("Number of items:", myTodos.deleteTask('Finish this iteration 2!! 🤓'));
// myTodos.listAllTasks();
