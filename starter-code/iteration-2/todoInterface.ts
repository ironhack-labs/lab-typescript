// Write the interface for class Todo. It must have:
export interface TodoInterface {
  myArray: Array<string>,
  addTask(task: string): string,
  listAllTasks(): void,
  deleteTask(task: string): number,
}

