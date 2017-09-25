// Write the interface for class Todo. It must have:
// - An array of strings as a property.
// - Method for adding task where will receive a string, doesn't return anything.
// - Method for listing all task in the console, doesn't return anything.
// - Method for delete a task where will receive a string, doesn't return anything.
// Array of strings.
// A function to add tasks, that will receive the task as a parameter.
// A function to list all the tasks.
// A function to delete tasks, that will receive the task as a parameter.

export interface TodoInterface {
  taskArr: string[],
  addTask(task: string),
  listAllTasks(),
  deleteTask(task: string)
}
