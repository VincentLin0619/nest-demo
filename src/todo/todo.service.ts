import { Injectable } from '@nestjs/common';

@Injectable()
export class TodoService {
  private todos: { id: number; title: string; description: string }[] = [
    {
      id: 1,
      title: 'todo 1',
      description: '',
    },
  ];
  getTodos(): { id: number; title: string; description: string }[] {
    return this.todos;
  }
  createTodo(item: { id: number; title: string; description: string }) {
    item.id = this.todos.length + 1;
    item.title = `todo ${item.id}`;
    item.description = '';
    this.todos.push(item);
  }
}
