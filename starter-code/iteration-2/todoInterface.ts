// Write the interface for class Todo. It must have:
// - An array of strings as a property.
// - Method for adding task where will receive a string, doesn't return anything.
// - Method for listing all task in the console, doesn't return anything.
// - Method for delete a task where will receive a string, doesn't return anything.
export interface ToDoInterface {
                 tasks: Array<string>;
     addTask('string'): void;
        listAllTasks(): void;
  deleteTask('string'): void;
}
