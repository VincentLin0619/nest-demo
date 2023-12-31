import { Controller, Get } from '@nestjs/common';
import { TodoService } from './todo.service';

@Controller()
export class TodoController {
  constructor(private readonly todoService: TodoService) {}

  @Get('/todolists')
  getAll() {
    return this.todoService.getTodos();
  }
}
