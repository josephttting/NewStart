import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule }    from '@angular/forms';

import { HeroDetailComponent }  from './hero-detail.component';
import { HeroDetailRoutingModule } from './hero-detail-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HeroDetailRoutingModule
  ],
  declarations: [
    HeroDetailComponent
  ]
})
export class HeroDetailModule { }
