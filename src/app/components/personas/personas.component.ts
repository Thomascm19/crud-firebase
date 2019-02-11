import { Component, OnInit } from '@angular/core';
import { PersonasService } from '../../services/personas.service';


@Component({
  selector: 'app-personas',
  templateUrl: './personas.component.html',
  styles: []
})
export class PersonasComponent implements OnInit {

  personas: any;

  // tslint:disable-next-line:variable-name
  constructor(private _personasService: PersonasService) {

  this._personasService.getPersonas()
        .subscribe(data => {
          console.log(data);
          this.personas = data;
        });

  }

  ngOnInit() {
  }

  eliminar(key$: string) {
    this._personasService.eliminar(key$)
      .subscribe(respuesta => {
         if (respuesta) {
           console.error(respuesta);
         } else {
           delete this.personas[key$];
         }
      });
  }

}
