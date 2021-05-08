import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CovidRoutingModule } from './covid-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { WorldListComponent } from './world-list/world-list.component';
import { WorldMapComponent } from './world-map/world-map.component';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';


@NgModule({
  declarations: [DashboardComponent, WorldListComponent, WorldMapComponent],
  imports: [
    CommonModule,
    CovidRoutingModule,
    LeafletModule
  ]
})
export class CovidModule { }
