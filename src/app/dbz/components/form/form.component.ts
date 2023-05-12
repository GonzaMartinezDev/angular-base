import { Component, EventEmitter, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'app-dbz-add-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent {
  @Output()
  public onNewCharacter: EventEmitter<Character> = new EventEmitter();

  public character: Character = {
    id:'',
    name: '',
    power: 0,
  };

  showCharacter(): void {
    console.log(this.character);
    this.onNewCharacter.emit(this.character);
    // this.character = { id: '', name: '', power: 0 };
  }
}
