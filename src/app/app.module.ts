import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { StartComponent } from './start/start.component';
import { BlobMorpher } from './start/start.component';
import { WitchComponent } from './witch/witch.component';
import { WarriorComponent } from './warrior/warrior.component';
import { BardComponent } from './bard/bard.component';
import { SummonerComponent } from './summoner/summoner.component';
import { DarkKnightComponent } from './dark-knight/dark-knight.component';
import { FinComponent } from './fin/fin.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

import { routing, appRoutingProviders } from './app.routing';

@NgModule({
  declarations: [
    AppComponent,
    StartComponent,
    BlobMorpher,
    WitchComponent,
    WarriorComponent,
    BardComponent,
    SummonerComponent,
    DarkKnightComponent,
    PageNotFoundComponent,
    HomeComponent,
    FinComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [appRoutingProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
