// Write the interface for class TodoItem. It must have:

interface TodoItemInterface{
// - A title of the task as a property.
  taskTitle: string;

// - A boolean to mark if it's done.
  taskCompleted: boolean;

// - A property updatedAt, obiously is a date.
  taskUpdatedAt: string;

// - Method for toogle if it's done or not, doesn't return anything.
  toggleCompleted(): boolean;

}

// Write the interface for class Todo. It must have:
interface TodoListInterface{

// - An array of TodoItem as a property.
  taskList: Array<TodoItem>;

// - Method for adding task where will receive an instance of TodoItem, doesn't return anything.
  addTask(task): void;

// - Method for listing all task in the console, doesn't return anything.
  listAllTasks(): void;

// - Method for delete a task where will receive an instance of TodoItem, doesn't return anything.
  deleteTask(taskToDelete): number;

// - Method for show all tasks that are not yet done, doesn't return anything.
  listUncomplete(): void;

}
