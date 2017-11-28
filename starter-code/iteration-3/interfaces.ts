// Write the interface for class TodoItem. It must have:
export interface listItemInterface {
title: String;
status: boolean;
updatedAt: Date;
toogle(): void;
}

// Write the interface for class Todo. It must have:
export interface toDoListInterface {
  tasks: Array <listItemInterface>;
  addTask (String): number;
  listAllTasks (): void;
  deleteTask (String): number;

}

// - An array of TodoItem as a property.
// - Method for adding task where will receive an instance of TodoItem, doesn't return anything.
// - Method for listing all task in the console, doesn't return anything.
// - Method for delete a task where will receive an instance of TodoItem, doesn't return anything.
// - Method for show all tasks that are not yet done, doesn't return anything.
