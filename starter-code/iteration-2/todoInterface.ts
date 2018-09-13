// Write the interface for class Todo. It must have:
export interface ToDo {
  // - An array of strings as a property.
  tasks: Array<string>;
  // - Method for adding task where will receive a string, doesn't return anything.
  addTask(task: string): number; 
  // - Method for listing all task in the console, doesn't return anything.
  listAllTasks(): void;
  // - Method for delete a task where will receive a string, doesn't return anything.
  deleteTask(task): number;
}
