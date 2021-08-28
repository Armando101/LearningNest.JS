import { Controller, Get } from '@nestjs/common';

@Controller('users')
export class UsersController {
  @Get()
  getOrders() {
    return `All users listed`;
  }
}
