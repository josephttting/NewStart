import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: '/cl-dashboard', pathMatch: 'full' },
  { path: 'cl-dashboard', loadChildren: 'app/dashboard/dashboard.module#DashboardModule' },
  { path: 'detail/:id', loadChildren: 'app/hero-detail/hero-detail.module#HeroDetailModule' },
  { path: 'cl-heroes', loadChildren: 'app/heroes/heroes.module#HeroesModule' }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
