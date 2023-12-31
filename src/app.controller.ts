import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('yes')
  doMagic() {
    return this.appService.doingMagic();
  }

  @Get('translate')
  translate() {
    return this.appService.translate();
  }
}
