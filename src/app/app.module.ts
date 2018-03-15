import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { app_routing } from './app.routes';

import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { SearchComponent } from './components/search/search.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';

import { SpotifyService } from './services/spotify.service';
import { SinfotoPipe } from './pipes/sinfoto.pipe';
import { MinutosPipe } from './pipes/minutos.pipe';
import { ExplicitPipe } from './pipes/explicit.pipe';
import { DomseguroPipe } from './pipes/domseguro.pipe';

import { ArtistComponent } from './components/artist/artist.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SearchComponent,
    NavbarComponent,
    SinfotoPipe,
    MinutosPipe,
    ExplicitPipe,
    DomseguroPipe,
    ArtistComponent
  ],
  imports: [
    BrowserModule,
    app_routing,
    HttpClientModule,
    FormsModule
  ],
  providers: [SpotifyService],
  bootstrap: [AppComponent]
})
export class AppModule { }