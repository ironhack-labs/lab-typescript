// Write the interface for class Todo. It must have:
// - An array of strings as a property.
// - Method for adding task where will receive a string, doesn't return anything.
// - Method for listing all task in the console, doesn't return anything.
// - Method for delete a task where will receive a string, doesn't return anything.
interface taskMethods{
    tasks: Array<string>;
    addTask(string:string): Number;
    listAllTasks(): void;
    deleteTask(string:string): Number;
}

export {taskMethods}