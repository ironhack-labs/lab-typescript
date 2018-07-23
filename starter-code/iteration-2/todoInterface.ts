// Write the interface for class Todo. It must have:
export interface TodoInterface {
    taskList: Array<string>; // - An array of strings as a property.
    addTask(task:string): number; // - Method for adding task where will receive a string, doesn't return anything.
    listAllTasks(): void; // - Method for listing all task in the console, doesn't return anything.
    deleteTask(task:string): number; // - Method for delete a task where will receive a string, doesn't return anything.
  }
