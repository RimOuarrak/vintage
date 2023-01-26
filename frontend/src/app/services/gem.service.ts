import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { sample_gems } from 'src/data';
import { sample_tags } from 'src/data';
import { GEMS_BY_SEARCH_URL, GEMS_BY_TAG_URL, GEMS_TAGS, GEMS_URL, GEMS_BY_ID_URL } from '../shared/constants/urls';
import { Gem } from '../shared/models/Gem';
import { Tag } from '../shared/models/Tag';

@Injectable({
  providedIn: 'root'
})
export class GemService {

  constructor(private http:HttpClient) { }

  getAll(): Observable<Gem[]> {
    return this.http.get<Gem[]>(GEMS_URL);
  }

  
  getAllGemsBysearchTerm(searchTerm: string)
  {
       return this.http.get<Gem[]>(GEMS_BY_SEARCH_URL + searchTerm);
  }
  
  getAllTags(): Observable<Tag[]> {
    return this.http.get<Tag[]>(GEMS_TAGS);
  }

  getAllGemsByTag(tag: string): Observable<Gem[]> {
    return tag === "All" ?
      this.getAll() :
      this.http.get<Gem[]>(GEMS_BY_TAG_URL + tag);
  }

  getGemById(gemId:string):Observable<Gem>{
    return this.http.get<Gem>(GEMS_BY_ID_URL + gemId);
  }
    //??if the previous one is undefined so we do the folowing one
}
