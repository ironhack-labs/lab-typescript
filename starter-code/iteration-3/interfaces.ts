// Write the interface for class TodoItem. It must have:
// - A title of the task as a property.
// - A boolean to mark if it's done.
// - A property updatedAt, obiously is a date.
// - Method for toogle if it's done or not, doesn't return anything.

export interface TodoItemInterface{
  title: string,
  status: boolean,
  updatedAt: Date,
  toggleStatus()
}

export interface TodoListInterface{
  TodoItems: string[],
  addTask(ToDoItem),
  listAllTasks(),
  deleteTask(ToDoItem)
}
