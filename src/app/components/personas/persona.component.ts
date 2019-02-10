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
  id: string;

  // tslint:disable-next-line:variable-name
  constructor(private _personaService: PersonasService,
              private router: Router,
              private activatedRoute: ActivatedRoute) {

                this.activatedRoute.params
                    .subscribe(parametros => {
                    // tslint:disable-next-line:no-string-literal
                    this.id = parametros['id'];

                  // tslint:disable-next-line:align
                  if (this.id !== 'nuevo') {
                    this._personaService.getPersona(this.id)
                       .subscribe( (data: Persona) => this.persona = data);

                  }
                  });

              }

  ngOnInit() {
  }

  guardar() {
    console.log(this.persona);

    if (this.id === 'nuevo') {
      // insertando
      this._personaService.nuevaPersona(this.persona)
      .subscribe(data => {
        console.log(data);
        // tslint:disable-next-line:no-string-literal
        this.router.navigate(['/persona', data['name']]);
      }, error => console.log(error));
    } else {
      this._personaService.actualizarPersona(this.persona, this.id)
      .subscribe(data => {
        console.log(data);
      }, error => console.log(error));
    }

  }
  agregarNueva(form: NgForm) {
    this.router.navigate(['/persona', 'nuevo']);

    form.reset();
  }

}
