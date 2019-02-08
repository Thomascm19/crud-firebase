import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


// Componentes
import { AppComponent } from './app.component';
import { PersonasComponent } from './components/personas/personas.component';
import { PersonaComponent } from './components/personas/persona.component';

// Routas
import { ROUTER } from './app.routes';


@NgModule({
  declarations: [
    AppComponent,
    PersonasComponent,
    PersonaComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ROUTER
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
