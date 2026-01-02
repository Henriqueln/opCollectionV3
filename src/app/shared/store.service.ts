import { Injectable } from '@angular/core';
import { Set } from '../../sets/models/set';

@Injectable({
  providedIn: 'root'
})
export class StoreService {
  private sets: Set[] = []

  constructor() { }

  getSets(): Set[] {
    return this.sets;
  }

  setSets(set: Set[]) {
    this.sets = set;
  }

}
