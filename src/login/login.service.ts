import { Injectable } from '@nestjs/common';

@Injectable()
export class LoginService {
  sayHello(): string {
    return 'hello there';
  }
}
