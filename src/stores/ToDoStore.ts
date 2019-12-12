import {ToDo} from "../models/ToDo";
import {action, computed, observable, reaction} from "mobx";

class ToDoStore {
    @observable todoList: ToDo[] = [];

    constructor() {
        reaction(
            () => this.todoList.filter(todo => !todo.isComplete),
            incompletedTasks => {
                if (incompletedTasks.length > 5) {
                    alert("Dude. You've got too much on your plate.")
                }
            }
        )
    }

    @computed
    get doneTasks(): number {
        return this.todoList.filter(x=>x.isComplete).length;
    }

    @action
    addToDo(task: string) {
        this.todoList.push({task: task, isComplete: false});
    }

    @action
    markAsDone(doneTask: ToDo) {
        this.todoList.find(x => x === doneTask).isComplete = true;
    }
}

export const toDoStore=new ToDoStore();
