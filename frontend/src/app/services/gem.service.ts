import { Injectable } from '@angular/core';
import { sample_gems } from 'src/data';
import { sample_tags } from 'src/data';
import { Gem } from '../shared/models/Gem';
import { Tag } from '../shared/models/Tag';

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
    return (this.getAll().filter(gem => gem.name.toLowerCase().includes(searchTerm.toLowerCase())))
  }
  
  getAllTags():Tag[]
  {
    return sample_tags;
  }
  getAllGemsByTag(tag:string)
  {
    return tag == "All" ?
    this.getAll(): this.getAll().filter(gem => gem.tags?.includes(tag));
  }

  getGemById(gemId:string):Gem {
    return this.getAll().find(gem => gem.id == gemId) ?? new Gem();
    //??if the previous one is undefined so we do the folowing one
  }
}
