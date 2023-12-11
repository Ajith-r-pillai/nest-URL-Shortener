import { Module } from '@nestjs/common';
import { UrlShortenerController } from './url-shortener.controller';
import { UrlShortenerService } from './url-shortener.service';
import { AuthModule } from 'src/auth/auth.module';

@Module({
  imports:[AuthModule],
  controllers: [UrlShortenerController],
  providers: [UrlShortenerService],
})
export class UrlShortenerModule {}


// import { Module } from '@nestjs/common';
// import { UrlShortenerController } from './url-shortener.controller';
// import { UrlShortenerService } from './url-shortener.service';

// @Module({
//   controllers: [UrlShortenerController],
//   providers: [UrlShortenerService],
// })
// export class UrlShortenerModule {}