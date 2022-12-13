import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { OptionsController } from './options/options.controller';

@Module({
  imports: [],
  controllers: [AppController, OptionsController],
  providers: [AppService],
})
export class AppModule {}
