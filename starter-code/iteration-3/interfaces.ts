//Write the interface for class TodoItem. It must have:
// - A title of the task as a property.
// - A boolean to mark if it's done.
// - A property updatedAt, obiously is a date.
// - Method for toogle if it's done or not, doesn't return anything.
interface TodoItemInterface {
  title:string;
  status:boolean;
  updatedAt:string;
  toggleStatus();
}

// Write the interface for class Todo. It must have:
// - An array of TodoItem as a property.
// - Method for adding task where will receive an instance of TodoItem, doesn't return anything.
// - Method for listing all task in the console, doesn't return anything.
// - Method for delete a task where will receive an instance of TodoItem, doesn't return anything.
// - Method for show all tasks that are not yet done, doesn't return anything.
interface todoListInterface {
  todoItems: TodoItemInterface;
  addTask(todoItem: TodoItemInterface) :number;
  listAllTasks():void;
  deleteTask(todoItem: TodoItemInterface):number;
}


// Create class TodoItem that implements the corresponding interface
class TodoItem implements TodoItemInterface {
  status:boolean;
  updatedAt: date;

  constructor(public title:string){
    this.title = title;
    this.status = false;
    this.updatedAt = new Date();
  }
  toggleStatus():boolean {
    return !this.status;
  }
}


// Create class TodoList that implements the corresponding interface
class TodoList implements todoListInterface {
  listItemElements:TodoItem[] = [];
  addTask(todoItem: TodoItem):number{
    this.listItemElements.push(todoItem);
    console.log(`Task ${todoItem.title} added to the list`);
    return this.listItemElements.length;
  };
  listAllTasks():void{
    this.listItemElements.forEach(listItem => {
      console.log(listItem.title, listItem.status, listItem.updatedAt);
    })
  };
  deleteTask(todoItem:TodoItem):number{
    let position = this.listItemElements.indexOf(todoItem);
    this.listItemElements.splice(position,1);
    console.log(`${todoItem.title} removed from the list`);
    return this.listItemElements.length;
  };
}

