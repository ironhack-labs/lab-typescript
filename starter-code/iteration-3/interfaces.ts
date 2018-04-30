// Write the interface for class TodoItem. It must have:
export interface TodoItemInterface {
// - A title of the task as a property.
    task: string;

// - A boolean to mark if it's done.
    isDone: boolean;
// - A property updatedAt, obiously is a date.
    updatedAt: Date;

// - Method for toogle if it's done or not, doesn't return anything.
    toggleDone(): void;
}
// Write the interface for class Todo. It must have:
export interface TodoListInterface {

// - An array of TodoItem as a property.
    todoItems: Array<TodoItemInterface>;

// - Method for adding task where will receive an instance of TodoItem, doesn't return anything.
    addTask(task: TodoItemInterface): number;

// - Method for listing all task in the console, doesn't return anything.
    listAllTasks(): void;

// - Method for delete a task where will receive an instance of TodoItem, doesn't return anything.
    deleteTask(task: TodoItemInterface): number;

// - Method for show all tasks that are not yet done, doesn't return anything.
    listUncomplete(): void;

}