import { Injectable } from '@nestjs/common';
import { Sequelize } from 'sequelize-typescript';

@Injectable()
export class AppService {

  constructor(private sequelize: Sequelize) {
    this.dataBaseSyncronize();
  }

  async dataBaseSyncronize() {
    await this.sequelize.sync();
  }

  getHello(): string {
    return 'Hello World!';
  }
}
