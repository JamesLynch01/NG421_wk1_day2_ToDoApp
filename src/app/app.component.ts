import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Todos';
  todoList: any [] = [];
  todoTitle: string;
  
  ngOnInit() {
    this.todoTitle = '';
    this.todoList = [
      // example of how to make an item in todo list
      { title: 'Install Angular CLI', isDone: false },
    
    ];
  }

  addTodo():void {
    this.todoList.push({
      title: this.todoTitle,
      isDone: false
    });

    this.todoTitle = '';
  }

  deleteTodo(todo:any){ 
    const index = this.todoList.findIndex(todoItem => todoItem === todo);
      this.todoList.splice(index, 1);
  }
}


