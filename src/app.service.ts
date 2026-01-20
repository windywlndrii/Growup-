// src/app.service.ts

import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService { // <-- Pastikan ada 'export' di sini
  getHello(): string {
    return 'Hello World!';
  }
}