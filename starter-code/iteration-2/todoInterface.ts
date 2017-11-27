// Write the interface for class Todo. It must have:
// - An array of strings as a property.
// - Method for adding task where will receive a string.
// - Method for listing all task in the console.
// - Method for delete a task where will receive a string.
export interface todoInterface {
    tasks: Array<string>;
    addTask(task: string);
    listAllTasks():void;
    deleteTask(task: string);
}
