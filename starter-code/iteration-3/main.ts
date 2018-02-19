// Add the reference to the interface
import { TItem } from './interfaces'
import { TodoInterface } from './interfaces';
// Create class TodoItem that implements the corresponding interface
class TodoItem implements TItem {
    done: boolean = false; 
    updateAt: Date;
    constructor(public title:string){}
    doneToggle():void{
        !this.done
    }
}
// Create class TodoList that implements the corresponding interface
class TodoList implements TodoInterface {
    array:Array<TodoItem>
    constructor(array:Array<string>){ };
    addTask(message:TodoItem):void{
        this.array.push(message)
    };
    listAllTasks():void{
      this.array.forEach( p => console.log(p) );
    };
    deleteTask(task:TodoItem):void{
      let a = this.array.indexOf(task);
      this.array.splice(a);
    };
    listUncomplete():void{
        this.array.forEach((a)=> {
            if (a.done == false ){
                console.log(a)
            }
        })
    }

}

