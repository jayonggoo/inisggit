import { Injectable } from '@angular/core';

import{ Hero } from './hero';
import{ HEROES } from './mock-heroes';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor() { }

  getHero(id:number):Promise<any>{
    return this.getHeroes()
            .then(heroes => heroes.find(hero => hero.id === id));
  }

  getHeroes():Promise<any>{
    return Promise.resolve(HEROES);
  }
}
