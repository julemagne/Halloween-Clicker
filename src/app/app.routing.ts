import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StartComponent } from './start/start.component';
import { WitchComponent } from './witch/witch.component';
import { WarriorComponent } from './warrior/warrior.component';
import { BardComponent } from './bard/bard.component';
import { SummonerComponent } from './summoner/summoner.component';
import { DarkKnightComponent } from './dark-knight/dark-knight.component';

const appRoutes: Routes = [
  { path: '', component: StartComponent },
  { path: 'witch', component: WitchComponent },
  { path: 'warrior', component: WarriorComponent },
  { path: 'bard', component: BardComponent },
  { path: 'summoner', component: SummonerComponent },
  { path: 'dark-knight', component: DarkKnightComponent }
];

export const appRoutingProviders: any[] = [
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);