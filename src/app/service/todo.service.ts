import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import {Todo} from "../model/Todo";

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  todos: Todo[];
  constructor() {
    this.todos = [
      {
        id: "111",
        title: "Learn Angular",
        isCompleted: false,
        date: new Date()
      },
      {
        id: "121",
        title: "Learn VueJs",
        isCompleted: false,
        date: new Date()
      },
      {
        id: "126",
        title: "Learn ReactJs",
        isCompleted: true,
        date: new Date()
      }
    ]
  }

  getTodos() {
    return of(this.todos);
  }
  addTodo(todo: Todo) {
    this.todos.push(todo);
  }
  changeStatus(todo: Todo) {
    this.todos.map(item => {
      if(item.id === todo.id) {
        todo.isCompleted = !todo.isCompleted;
      }
    })
  }
  deleteTodo(todo: Todo) {
    const index = this.todos.findIndex(
      (currentObj) => currentObj.id === todo.id
    );
    this.todos.splice(index, 1);
  }
}
