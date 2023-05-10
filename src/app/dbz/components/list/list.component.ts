import { Component, Input, EventEmitter, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';


@Component({
  selector: 'app-dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  @Output()
  public onDelete: EventEmitter<number> = new EventEmitter();

  @Input()
  public characterList: Character[] = [{
    name: 'Trunk',
    power: 10
  }, {
    name: 'Sheng Long',
    power: 999999
  }]

  onDeleteCharacter(index: number):void {
    // TODO: Emitir el ID del personaje
    // console.log({index});
    this.onDelete.emit(index);
  }


}
