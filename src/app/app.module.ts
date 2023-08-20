import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { CineticoComponent } from './cinetico/cinetico.component';
import { CineticoApiService } from "./cinetico-api.service";
import { HttpClientModule } from "@angular/common/http";
import { MovieComponent } from './movie/movie.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MenuComponent } from './menu/menu.component';
import { FormsModule } from "@angular/forms";
import { MatSidenavModule } from "@angular/material/sidenav";

import { FilterMoviesPipe } from './pipes/filter-movies.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CineticoComponent,
    MovieComponent,
    MenuComponent,
    FilterMoviesPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    FormsModule
  ],
  providers: [CineticoApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
