import { Controller, Get, Param, Query } from '@nestjs/common';

@Controller('todo')
export class TodoController {
  @Get()
  getTodByQuery(@Query() query: { limit: number; skip: number }) {
    const { limit = 30, skip = 0 } = query;
    const list = [
      {
        id: 1,
        title: 'todo 1',
        description: '',
      },
      {
        id: 2,
        title: 'todo 2',
        description: '',
      },
    ];
    console.log(query);

    return list.slice(limit, skip);
  }
  @Get('list')
  getTodoList() {
    return [
      {
        id: 1,
        title: 'todo list',
      },
    ];
  }

  @Get(':id')
  getTodoById(@Param('id') id: string) {
    return {
      id,
      title: `todo ${id}`,
      description: '',
    };
  }

  //   @Get()
  //   getTodoByCustom(@Query() query: { limit: number; skip: number }) {
  //     const { limit = 30, skip = 0 } = query;
  //     const list = [
  //       {
  //         id: 1,
  //         title: 'todo 1',
  //         description: '',
  //       },
  //       {
  //         id: 2,
  //         title: 'todo 2',
  //         description: '',
  //       },
  //     ];
  //     return list.slice(skip, limit);
  //   }
}
