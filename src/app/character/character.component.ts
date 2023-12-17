import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CharactersService } from '../services/characters.service'

@Component({
  selector: 'app-character',
  standalone: true,
  imports: [],
  templateUrl: './character.component.html',
  styleUrl: './character.component.css'
})
export class CharacterComponent {

  id:string='';
  character:any = null;

  constructor(private route:ActivatedRoute, private service:CharactersService){
    this.route.params.subscribe(param => 
      this.id = param['id']);
      console.log("Getting..."+this.id);
      this.getCharacter();
  }

  getCharacter(){
    console.log("Calling..."+this.id);
    this.service.get(this.id)
    .subscribe(result => {
      this.character = result;
      console.log(this.character);
    })
  }
}
