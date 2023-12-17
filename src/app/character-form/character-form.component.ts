import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl, ReactiveFormsModule } from '@angular/forms';
import { CharactersService } from '../services/characters.service'
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';


@Component({
  selector: 'app-character-form',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './character-form.component.html',
  styleUrl: './character-form.component.css'
})
export class CharacterFormComponent{

  constructor(public characterService:CharactersService, private router:Router){}

  submitted:boolean = false;

  groupForm = new FormGroup({
    id: new FormControl('', Validators.required),
    name: new FormControl('', Validators.required),
    status: new FormControl('',  Validators.required),
    species: new FormControl('', Validators.required),
    gender: new FormControl('', Validators.required),
    origin: new FormControl('', Validators.required),
    location: new FormControl('', Validators.required),
    image: new FormControl('', Validators.required)
  })

    send_char = (): void => {
        this.characterService.add(this.groupForm.value).subscribe(
          response => {
            console.log(response);
            this.submitted = true;
            this.router.navigate(['/characters/'+this.groupForm.value.id]);
          },
          error => {
            console.log(error);
          }
        );
    }
}
