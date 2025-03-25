import { Controller, Delete, Get, Post, Put } from '@nestjs/common';
import { SongsService } from './songs.service';

@Controller('songs')
export class SongsController {
  // This is a simple GET request handler

  //injected service
  constructor(private songService: SongsService) {}

  //create new song

  @Post()
  create(): string[] {
    this.songService.create(Math.random().toString());
    return this.songService.findAll();
  }

  //get all songs
  @Get('/all')
  findAll(): string {
    const allSongs = this.songService.findAll();
    return allSongs.join(', ');
  }

  //get songs according to id

  @Get('/:id')
  findOne(): string {
    return 'This action returns a song based on the id';
  }

  //update song according to id

  @Put('/:id')
  update(): string {
    return 'This action updates a song based on the id';
  }

  //delete song according to id
  @Delete('/:id')
  remove(): string {
    return 'This action removes a song based on the id';
  }
}
