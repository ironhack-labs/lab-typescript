// Write the interface for class Todo. It must have:
export interface TodoInterface {
    listItems: Array<string>;
    addTask(item: string): number;
    listAllTasks(): void;
    deleteTask(item: string): number;
}
// - An array of strings as a property.
// - Method for adding task where will receive a string, doesn't return anything.
// - Method for listing all task in the console, doesn't return anything.
// - Method for delete a task where will receive a string, doesn't return anything.
