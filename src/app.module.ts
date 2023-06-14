import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { implementJourney } from './implementJourney';



@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService, { provide: 'JourneyService', useValue: implementJourney }],
})
export class AppModule { }
