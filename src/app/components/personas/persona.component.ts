import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Persona } from '../interfaces/persona.interface';
import { PersonasService } from '../../services/personas.service';

@Component({
  selector: 'app-persona',
  templateUrl: './persona.component.html',
  styles: []
})
export class PersonaComponent implements OnInit {

  persona: Persona = {
    nombre: '',
    apellido: '',
    direccion: '',
    telefono: 0,
    estado: ''
  };

  // tslint:disable-next-line:no-inferrable-types
  nuevo: boolean = false;

  // tslint:disable-next-line:variable-name
  constructor(private _personaService: PersonasService,
              private router: Router,
              private activatedRoute: ActivatedRoute) {

                this.activatedRoute.params
                    .subscribe(parametros => {

                    console.log(parametros);
                    this.id = parametros.['id'];

                    });

              }

  ngOnInit() {
  }

  guardar() {
    console.log(this.persona);

    this._personaService.nuevaPersona(this.persona)
      .subscribe(data => {
        console.log(data);
        // tslint:disable-next-line:no-string-literal
        this.router.navigate(['/persona', data['name']]);
    }, error => console.log(error));
  }

}
