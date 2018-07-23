// Write the interface for class TodoItem. It must have:
// - A title of the task as a property.
// - A boolean to mark if it's done.
// - A property updatedAt, obiously is a date.
// - Method for toogle if it's done or not, doesn't return anything.

// Write the interface for class Todo. It must have:
// - An array of TodoItem as a property.
// - Method for adding task where will receive an instance of TodoItem, doesn't return anything.
// - Method for listing all task in the console, doesn't return anything.
// - Method for delete a task where will receive an instance of TodoItem, doesn't return anything.
// - Method for show all tasks that are not yet done, doesn't return anything.
export interface Item {
    title: string;
    compStatus: boolean;
    updatedAt: Date;
    toggleStatus():void;
}


export interface TodoInterface {
    taskList: Array<Item>; // - An array of strings as a property.
    addTask(todoItem:Item): number; // - Method for adding task where will receive a string, doesn't return anything.
    listAllTasks(): void; // - Method for listing all task in the console, doesn't return anything.
    deleteTask(todoItem:Item): number; // - Method for delete a task where will receive a string, doesn't return anything.
    listUncomplete(): 
}

