// Write the interface for class Todo. It must have:
// - An array of strings as a property.
// - Method for adding task where will receive a string, doesn't return anything.
// - Method for listing all task in the console, doesn't return anything.
// - Method for delete a task where will receive a string, doesn't return anything.

export interface TodoInterface{
    arr: string[];
    addTask(task:string): number;
    listAllTasks(): void;
    deleteTask(task:string): number;
}




// class Car implements Vehicle {
//     model: string;
  
//     constructor(public engines: number, public wheels: number) {}
  
//     isMotorbike():boolean {
//       return (this.wheels === 2);
//     }
  
//     setModel(model):void {
//       this.model = model;
//     }
//   }
  
//   let car = new Car(1, 4);
//   car.setModel("Nissan GTR");