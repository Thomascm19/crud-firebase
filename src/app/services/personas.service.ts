import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Persona } from '../components/interfaces/persona.interface';
import { map } from 'rxjs/operators';




@Injectable({
  providedIn: 'root'
})
export class PersonasService {

  personasURL: any = 'https://registro-a2587.firebaseio.com/personas.json';
  personaURL: any = 'https://registro-a2587.firebaseio.com/personas/';

  constructor(private http: HttpClient) { }

  nuevaPersona(persona: Persona) {

    const httpOptions = {
      headers: new HttpHeaders({
     'Content-Type': 'application/json'
      })
    };
    return this.http.post<Persona>( this.personasURL, persona , httpOptions )
    .pipe(  map( res => {
             console.log(res);
             return res;
    }));
  }

}
