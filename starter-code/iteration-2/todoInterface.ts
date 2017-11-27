// Write the interface for class Todo. It must have:
// - An array of strings as a property.
// - Method for adding task where will receive a string, doesn't return anything.
// - Method for listing all task in the console, doesn't return anything.
// - Method for delete a task where will receive a string, doesn't return anything.

interface todoInterface {
    tasks: string[];
    addTask(): number;
    listAllTasks();
    deleteTask():number;
  }

class Todo implements todoInterface {
    constructor (public tasks: string[]) {}

    addTask (task: string): number{
        tasks.push(task);
        console.log(`==========NEW TASK==========\nTask ${task} inserted in the list
        \nNumber of items: ${tasks.length}`);
        let elements = tasks.length;
        return elements;
       }
    listAllTasks(){
        tasks.forEach((item)=>{
            console.log(`-->${item}`);
        });
    }
    deleteTask(task:string):number{
        let index = tasks.indexOf(task);
        if (index>-1){
            tasks.splice(index,1);
        }
        console.log(`The number of tasks is: ${tasks.length}`);
        console.log(`==========NEW REMOVED========\nTask ${task} deleted from the list
        \nNumber of items: ${tasks.length}`);
        return tasks.length;
    }

}

  
  
