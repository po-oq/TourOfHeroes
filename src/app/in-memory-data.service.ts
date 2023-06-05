import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from './hero';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  constructor() {}
  // InMemoryDataServiceが以下のようなURLを作成する
  // GET api/heroes          // all heroes
  // GET api/heroes/42       // the hero with id=42
  // GET api/heroes?name=^j  // 'j' is a regex; returns heroes whose name starting with 'j' or 'J'
  // GET api/heroes.json/42  // ignores the ".json"
  createDb() {
    const heroes = [
      { id: 12, name: 'Dr. Nice' },
      { id: 13, name: 'Bombasto' },
      { id: 14, name: 'Celeritas' },
      { id: 15, name: 'Magneta' },
      { id: 16, name: 'RubberMan' },
      { id: 17, name: 'Dynama' },
      { id: 18, name: 'Dr. IQ' },
      { id: 19, name: 'Magma' },
      { id: 20, name: 'Tornado' },
    ];
    return { heroes };
  }

  getId(heroes: Hero[]) {
    return heroes.length > 0
      ? Math.max(...heroes.map((hero) => hero.id)) + 1
      : 11;
  }
}
