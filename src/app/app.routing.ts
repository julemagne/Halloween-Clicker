import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { StartComponent } from './start/start.component';
import { WitchComponent } from './witch/witch.component';
import { WarriorComponent } from './warrior/warrior.component';
import { BardComponent } from './bard/bard.component';
import { SummonerComponent } from './summoner/summoner.component';
import { DarkKnightComponent } from './dark-knight/dark-knight.component';
import { FinComponent } from './fin/fin.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const appRoutes: Routes = [
  { path: '', 
    component: HomeComponent,
    children: [
      { path: '', component: StartComponent },
      { path: 'witch', component: WitchComponent },
      { path: 'warrior', component: WarriorComponent },
      { path: 'bard', component: BardComponent },
      { path: 'summoner', component: SummonerComponent },
      { path: 'dark-knight', component: DarkKnightComponent }      
    ]
  },
  { path: 'fin', component: FinComponent },
  { path: '**', component: PageNotFoundComponent }
];

export const appRoutingProviders: any[] = [
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);