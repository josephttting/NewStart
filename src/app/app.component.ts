import { Component } from '@angular/core';

import { MessageService } from '../app/message.service';
import { HeroService } from '../app/hero.service';

import { Hero } from '../app/hero';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  constructor(public messageService: MessageService, public heroService: HeroService) {

  }

  heroes: Hero[];
  title = 'Tour of Heroes';
}
