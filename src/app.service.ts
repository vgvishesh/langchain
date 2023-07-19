import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  doingMagic(): string {
    return 'this is it!';
  }
}
