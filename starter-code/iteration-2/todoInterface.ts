// Write the interface for class Todo. It must have:
// - An array of strings as a property.
// - Method for adding task where will receive a string, doesn't return anything.
// - Method for listing all task in the console, doesn't return anything.
// - Method for delete a task where will receive a string, doesn't return anything.

//not sure why this syntax works but it should be more like addTask(): string;

export interface toDoint {
    tasks:          string[];
    task:           string;
    addTask:        (task: string) => number;
    listAllTasks(): number;
    deleteTask:     (str: string) => number;


}
