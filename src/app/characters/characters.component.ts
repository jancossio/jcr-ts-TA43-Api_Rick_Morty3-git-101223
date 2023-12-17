import { Component, OnInit } from '@angular/core';
import { CharactersService } from '../services/characters.service'
import { CommonModule } from '@angular/common';
import { Router, RouterOutlet, RouterModule } from '@angular/router';

@Component({
  selector: 'app-characters',
  standalone: true,
  imports: [RouterOutlet, RouterModule, CommonModule],
  templateUrl: './characters.component.html',
  styleUrl: './characters.component.css'
})
export class CharactersComponent implements OnInit{

  characters: any=null;

  constructor(private charService:CharactersService, private router:Router){}

  ngOnInit(){
    this.getCharacters();
  }

  getCharacters(){
      this.charService.getAll()
      .subscribe(result => {this.characters = result})
  }

  delete_char = (id:any): void => {
    
    console.log(id);
    this.charService.delete(id).subscribe((data:any) =>{
      this.ngOnInit();
    });
  }
}