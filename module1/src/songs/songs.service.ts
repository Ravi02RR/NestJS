import { Injectable } from '@nestjs/common';

@Injectable()
export class SongsService {
  private readonly songsArray: string[] = [];

  // in real world we will make db call here

  create(song: string) {
    this.songsArray.push(song);
    return this.songsArray;
  }

  findAll() {
    return this.songsArray;
  }
}
