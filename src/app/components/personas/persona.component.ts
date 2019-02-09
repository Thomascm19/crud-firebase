import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Persona } from '../interfaces/persona.interface';


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

  constructor() { }

  ngOnInit() {
  }

  guardar() {
    console.log(this.persona);
  }

}
