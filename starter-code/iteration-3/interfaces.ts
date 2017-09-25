
interface TodoItemInterface{
  title:string;
  done:boolean;
  updatedAt:Date;
  toggleStatus():void;
}


interface TodoListInterface{
  todos:Array<TodoItemInterface>;
  addTask(item:TodoItemInterface): number;
  listAllTasks():void;
  deleteTask(item:TodoItemInterface):number;
}

export {TodoItemInterface, TodoListInterface}
