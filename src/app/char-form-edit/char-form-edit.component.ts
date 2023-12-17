import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl, ReactiveFormsModule } from '@angular/forms';
import { CharactersService } from '../services/characters.service'
import { CommonModule } from '@angular/common';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-char-form-edit',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './char-form-edit.component.html',
  styleUrl: './char-form-edit.component.css'
})
export class CharFormEditComponent {

  id:string='';
  character:any = null;


  constructor(public characterService:CharactersService, private route:ActivatedRoute, private router:Router){
    this.route.params.subscribe(param => 
      this.id = param['id']);
      this.set_inputs();
  }

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

  set_inputs = (): void => {
    
    this.characterService.get(this.id).subscribe((data:any) => {
      this.character = data;
      if(data != null){
        this.groupForm.setValue(this.character);
      }else{
        console.log('error');
      }
    })
  }

    update_char = (): void => {
      this.characterService.update(parseInt(this.id),this.groupForm.value).subscribe(
        response => {
          console.log(response);
          this.submitted = true;
          this.router.navigate(['/characters/'+this.id]);
        },
        error => {
          console.log(error);
        }
      );
  }
  }
