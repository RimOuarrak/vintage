import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { GemService } from 'src/app/services/gem.service';
import { Gem } from 'src/app/shared/models/Gem';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  gems:Gem[] = [];
  constructor(private gemService:GemService, activatedRoute:ActivatedRoute) {
    let gemsObservable:Observable<Gem[]>
    activatedRoute.params.subscribe((params) => {
      if(params.searchTerm)
      gemsObservable = this.gemService.getAllGemsBysearchTerm(params.searchTerm);
      else if (params.tag)
      gemsObservable = this.gemService.getAllGemsByTag(params.tag);
      else
      gemsObservable = gemService.getAll();

      gemsObservable.subscribe((serverGems) =>
      {
        this.gems = serverGems;
      })
    })
  }
}
