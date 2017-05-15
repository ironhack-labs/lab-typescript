// Add the reference to the interface

// Create class TodoItem that implements the corresponding interface

class TodoItem implements TodoItemInferface{
  status:boolean;
  updatedAt:Date;
  constructor(public title:string){
  }
  toggleStatus():void{
    this.status = (this.status? false: true);
    this.updatedAt = new Date(new Date().getTime());
  }
}

// Create class TodoList that implements the corresponding interface

class TodoList implements TodoListInterface{
  constructor(public toDoList: Array<TodoItem> = []){
  }

  addTask(task:TodoItem): number{
    this.toDoList.push(task);
    console.log(`Task ${task.title} inserted in the list`)
    return this.toDoList.length;
  }

  listAllTasks():void{
    this.toDoList.forEach((task, index)=>{
      console.log(`task ${index+1}: ${task.title}`);
    })
  }

  listUncomplete():void{
    this.toDoList.forEach((task, index)=>{
      if(!task.status){
        console.log(`Uncompleted task ${index+1}: ${task.title}`);
      }
    })
  }

  deleteTask(task:TodoItem): number{

    var index = this.toDoList.indexOf(task);
    var numberLeft=0;
    if(index>-1){
      this.toDoList[index].toggleStatus();
      console.log(`Task ${task.title} deleted from the list updatedAt ${this.toDoList[index].updatedAt}`)
      this.toDoList.forEach((task)=>{
        if(!task.status)
        {
          numberLeft++;
        }
      })
      return numberLeft
    }
    console.log(`The task ${task.title} isn't in the list`)
    this.toDoList.forEach((task)=>{
      if(!task.status)
      {
        numberLeft++;
      }
    })
    return numberLeft

  }

}

// Execution
let task1 = new TodoItem('This is our first task');
let task2 = new TodoItem('Eat pizza 🍕 yummy!!!');
let task3 = new TodoItem('Finish this iteration 1!! 🤓');
let task4 = new TodoItem('Finish this iteration 2!! 🤓');
let task5 = new TodoItem('Finish this iteration 3!! 🤓');

let myTodos2 = new TodoList();

console.log("Number of items:", myTodos2.addTask(task1));
console.log("Number of items:", myTodos2.addTask(task2));
console.log("Number of items:", myTodos2.addTask(task3));
console.log("Number of items:", myTodos2.addTask(task4));
console.log("Number of items:", myTodos2.addTask(task5));
myTodos2.listAllTasks();
console.log("Number of items:", myTodos2.deleteTask(task3));
console.log("Number of items:", myTodos2.deleteTask(task4));
console.log("Number of items:", myTodos2.deleteTask(task5));
myTodos2.listUncomplete();
