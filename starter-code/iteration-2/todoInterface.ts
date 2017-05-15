// Write the interface for class Todo. It must have:
// - An array of strings as a property.
// - Method for adding task where will receive a string, doesn't return anything.
// - Method for listing all task in the console, doesn't return anything.
// - Method for delete a task where will receive a string, doesn't return anything.

interface TestInterface {
    myArray: Array<string> = [],
    function addTask(task: string): void {
      myArray.push(task);
      console.log("=========== NEW TASK ===========, Task "+task+" inserted in the list, Number of items: "+myArray.length);
    },
    function listAllTasks(){
      for(let i = 0; i < myArray.length; i++){
        console.log("Task "+i+": "+myArray[i]);
      }
    },
    function deleteTask(task: string){

      let indexTask = myArray.indexOf(task);
      let removeTask = myArray.splice(indexTask, 1);
    }
}

export interface TestInterface {}
