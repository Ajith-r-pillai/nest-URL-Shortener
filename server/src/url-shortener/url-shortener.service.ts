

// import { Injectable } from '@nestjs/common';
// import * as shorturl from 'shorturl';
// import { promisify } from 'util';

// const shorturlPromise = promisify(shorturl);

// @Injectable()
// export class UrlShortenerService {
//   async shortenUrl(longUrl: string): Promise<string> {
//     try {
//       const url = await shorturlPromise(longUrl);
//       return url;
//     } catch (error) {
//       throw new Error(`Error shortening URL: ${error.message}`);
//     }
//   }
// }
import { Injectable } from '@nestjs/common';
import * as nodeUrlShortener from 'node-url-shortener';

@Injectable()
export class UrlShortenerService {


  shortenUrl(longUrl: string): Promise<string> {
    return new Promise<string>((resolve, reject) => {
      nodeUrlShortener.short(longUrl, (err, url) => {
        if (err) {
          reject(err);
        } else {
          resolve(url);
        }
      });
    });
  }
}