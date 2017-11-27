// Add the reference to the "TodoInterface"

// 1. Create a class Todo that implements the Interface created before.
class Todo implements TodoInterface{
  constructor(public taskList: Array<string> = []){}

    addTask(task): number{
    this.taskList.push(task);
    console.log(task + " added");
    return this.taskList.length;
  }

    listAllTasks(): void{
    console.log(this.taskList);
  }

    deleteTask(taskToDelete): number{
    this.taskList.forEach((oneTask) => {
      if(oneTask === taskToDelete){
        var indexToDelete = this.taskList.indexOf(oneTask);
        this.taskList.splice(indexToDelete, 1);
        console.log(oneTask + " removed");
      }
    })
    return this.taskList.length;
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
