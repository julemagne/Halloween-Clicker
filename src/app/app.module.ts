import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { StartComponent } from './start/start.component';
import { WitchComponent } from './witch/witch.component';
import { WarriorComponent } from './warrior/warrior.component';
import { BardComponent } from './bard/bard.component';
import { SummonerComponent } from './summoner/summoner.component';
import { DarkKnightComponent } from './dark-knight/dark-knight.component';

import { routing, appRoutingProviders } from './app.routing';


@NgModule({
  declarations: [
    AppComponent,
    StartComponent,
    WitchComponent,
    WarriorComponent,
    BardComponent,
    SummonerComponent,
    DarkKnightComponent
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
