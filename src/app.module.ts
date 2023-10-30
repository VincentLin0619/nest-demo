import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TodoModule } from './todo/todo.module';
import { CopyTodoModule } from './copy-todo/copy-todo.module';

@Module({
  imports: [TodoModule, CopyTodoModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
