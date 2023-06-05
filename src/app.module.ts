import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import JourneyDallasTX from './implementJourney/JourneyDallasTX';
import JourneyNewYork from './implementJourney/JourneyNewYork';
import JourneyVegas from './implementJourney/JourneyVegas';
import JourneyPortoAlerge from './implementJourney/JourneyPortoAlerge';

const journeyServices = [JourneyDallasTX, JourneyNewYork, JourneyVegas, JourneyPortoAlerge];

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService,  { provide: 'JourneyService', useValue: journeyServices }],
})
export class AppModule {}
