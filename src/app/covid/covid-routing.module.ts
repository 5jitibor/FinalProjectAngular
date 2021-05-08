import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '../guards/auth.guard';
import { CountryResolverService } from '../resolvers/country-resolver.service';
import { DashboardComponent } from './dashboard/dashboard.component';
import { WorldListComponent } from './world-list/world-list.component';
import { WorldMapComponent } from './world-map/world-map.component';

const routes: Routes = [
  {
    path:'dashboard',
    component: DashboardComponent,
    canActivate: [AuthGuard]
  },{
    path:'world-list',
    component: WorldListComponent,
    canActivate: [AuthGuard]
  },{
    path:'world-map',
    component: WorldMapComponent,
    canActivate: [AuthGuard],
    resolve: {
      countriesResolved: CountryResolverService
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CovidRoutingModule { }
