import { Injectable } from '@angular/core';
import { sample_gems } from 'src/data';
import { Gem } from '../shared/models/Gem';

@Injectable({
  providedIn: 'root'
})
export class GemService {

  constructor() { }
  getAll():Gem[]
  {
    return sample_gems;
  }

  getAllGemsBysearchTerm(searchTerm:string)
  {
    return (this.getAll().filter(food => food.name.toLowerCase().includes(searchTerm.toLowerCase())))
  }
}
