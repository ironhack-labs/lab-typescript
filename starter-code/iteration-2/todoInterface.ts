// Write the interface for class Todo. It must have:
interface TodoInterface{
  array: Array<string>

addTask(task :string):number 
listAllTasks():string
deleteTask(task:string):number
}

// - An array of strings as a property.
// class Todo implements TodoInterface{

// - Method for adding task where will receive a string, doesn't return anything.
// - Method for listing all task in the console, doesn't return anything.
// - Method for delete a task where will receive a string, doesn't return anything.


export { TodoInterface };