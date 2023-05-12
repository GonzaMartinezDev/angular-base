import { Component, Input, EventEmitter, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

//TODO: un comentario

@Component({
  selector: 'app-dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  @Output()
  public onDelete: EventEmitter<string> = new EventEmitter();

  @Input()
  public characterList: Character[] = [{
    id: '',
    name: 'Trunk',
    power: 10
  }]

  onDeleteCharacter(id: string):void {
    // TODO: Emitir el ID del personaje
    // console.log({index});
    this.onDelete.emit(id);
  }


}
