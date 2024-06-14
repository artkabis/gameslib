import { Component, Output, input, output } from '@angular/core';
import { VideoGame } from '../list-games/models/video-game';

@Component({
  selector: 'artk-table-games',
  standalone: true,
  imports: [],
  templateUrl: './table-games.component.html',
  styleUrl: './table-games.component.scss'
})
export class TableGamesComponent {
  items = input.required<VideoGame[]>();
  title = input<string>('');
  toCreate = output<void>();
  //Version Angular 17 ->
  //@output() create = new EventEmitter<void>();

  clickAddVideoGame():void {
    this.toCreate.emit();
    console.info('clickAddVideoGame test');
  }
  
}
