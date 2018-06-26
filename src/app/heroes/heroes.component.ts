import { Component, OnInit } from '@angular/core';

import { Hero } from '../hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  
  private _heroes: Hero[];
  public heroCount: Number;

  constructor(private heroService: HeroService) { }

  get heroes() {
    if (!this._heroes) {
      this._heroes = [];
    }
    return this._heroes;
  }
  set heroes(heores: Hero[]) {
    this._heroes = heores;
    this.updateHeroCount();
  }
  
  ngOnInit() {
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroService.getHeroes()
    .subscribe(heroes => this.heroes = heroes);
  }

  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.heroService.addHero({ name } as Hero)
      .subscribe(hero => {
        this.heroes.push(hero);
        this.updateHeroCount();
      });
  }

  delete(hero: Hero): void {
    this.heroes = this.heroes.filter(h => h !== hero);
    this.heroService.deleteHero(hero).subscribe();
  }

  updateHeroCount() {
    if(this.heroes) {
      this.heroCount = this.heroes.length;
    }
    else {
      this.heroCount = 0;
    }
    this.heroService.heroCount$.next(this.heroCount);
  }
}
