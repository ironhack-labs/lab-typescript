// Add the reference to the interface

// Create class TodoItem that implements the corresponding interface
class TodoItem implements TodoItemInterface{
  constructor(public taskTitle: string){}
  taskCompleted: boolean = false;
  taskUpdatedAt: Date;
  toggleCompleted(): boolean{
    return !this.taskCompleted;
  }
}

// Create class TodoList that implements the corresponding interface
class TodoList implements TodoListInterface{
  constructor(public taskList: Array<TodoItem> = []){}
  addTask(task): number{
    console.log("Adding " + task.taskTitle)
    this.taskList.push(task)
    return this.taskList.length;
}
  listAllTasks(): void{
    this.taskList.forEach((oneTask) => {
      console.log(oneTask.taskTitle);
    })
}
  deleteTask(taskToDelete): number{
    this.taskList.forEach((oneTask) =>{
      if(oneTask === taskToDelete){
        var indexToDelete = this.taskList.indexOf(oneTask);
        this.taskList.splice(indexToDelete, 1);
        console.log(oneTask.taskTitle + " removed");
      }
    })
    return this.taskList.length;
}
  listUncomplete(): void{
      this.taskList.forEach((oneTask) => {
        if(oneTask.taskCompleted === false){
          console.log("Not Completed: " + oneTask.taskTitle);
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

const allTodos = new TodoList();

console.log("Number of items:", allTodos.addTask(task1));
console.log("Number of items:", allTodos.addTask(task2));
console.log("Number of items:", allTodos.addTask(task3));
console.log("Number of items:", allTodos.addTask(task4));
console.log("Number of items:", allTodos.addTask(task5));
allTodos.listAllTasks();
console.log("Number of items:", allTodos.deleteTask(task3));
console.log("Number of items:", allTodos.deleteTask(task4));
console.log("Number of items:", allTodos.deleteTask(task5));
allTodos.listUncomplete();
