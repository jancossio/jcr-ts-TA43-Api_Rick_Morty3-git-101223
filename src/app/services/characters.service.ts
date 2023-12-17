import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Character } from '../models/character.model';

const baseUrl = 'https://jcr-ts-ta43-rickdb-production.up.railway.app/characters';

@Injectable({
  providedIn: 'root'
})
export class CharactersService {

  http = inject(HttpClient);
  // constructor(private httpClient:HttpClient) { }

  getAll():Observable<any[]>{
    return this.http.get<any[]>(baseUrl);
  }

  get(id:any):Observable<any>{
    return this.http.get(`${baseUrl}/${id}`);
  }

  add(data:any):Observable<any>{
    return this.http.post(baseUrl,data);
  }

  update(id:number, data:any):Observable<any>{
    return this.http.put(`${baseUrl}/${id}`,data);
  }

  delete(id:number){

    return this.http.delete(`${baseUrl}/${id}`);
  }

}
