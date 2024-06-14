import { Component, signal } from '@angular/core';
import { VideoGame } from './models/video-game';
import { TableGamesComponent } from '../table-games/table-games.component';
import { CreateVideoGameComponent } from '../create-video-game/create-video-game.component';

@Component({
  selector: 'app-list-games',
  standalone: true,
  imports: [TableGamesComponent, CreateVideoGameComponent],
  templateUrl: './list-games.component.html',
  styleUrl: './list-games.component.scss'
})
export class ListGamesComponent {

  readyToCreate = signal<boolean>(false);

  videoGamesList:VideoGame[] = [
    {
      name: 'Mario',
      dateSortie: new Date(1985, 1, 1)
    },
    {
      name: 'Zelda',
      dateSortie: new Date(1986, 1, 1)
    },
    {
      name: 'Sonic',
      dateSortie: new Date(1991, 1, 1)
    },
    {
      name: 'Megaman',
      dateSortie: new Date(1987, 1, 1)
    },
    {
      name: 'Contra',
      dateSortie: new Date(1987, 1, 1)
    },
    {
      name: 'Pacman',
      dateSortie: new Date(1980, 1, 1)
    },
  ];

  readyForCreate(): void {
    console.info('Ready !');
    this.readyToCreate.set(true);
  }
}
