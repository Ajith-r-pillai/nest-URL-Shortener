import { Controller, Post, Body, UseGuards } from '@nestjs/common';
import { UrlShortenerService } from './url-shortener.service';
import { AuthGuard } from '@nestjs/passport';

type ShortenUrlResponse = { shortUrl: string } | { error: string };

@Controller('url-shortener')
export class UrlShortenerController {
  constructor(private readonly urlShortenerService: UrlShortenerService) {}

  @Post('/shorten')
@UseGuards(AuthGuard())
  async shortenUrl(@Body(`longUrl`) longUrl: string): Promise<ShortenUrlResponse>
  {
    try {
      const shortUrl = await this.urlShortenerService.shortenUrl(longUrl);

      // Handle success
      console.log(shortUrl);

      return { shortUrl };
    } catch (error) {
      // Handle error
      console.error(error.message);
      return { error: error.message };
    }
  }
}



