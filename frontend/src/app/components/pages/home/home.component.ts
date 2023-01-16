import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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
    activatedRoute.params.subscribe((params) => {
      if(params.searchTerm)
      this.gems = this.gemService.getAllGemsBysearchTerm(params.searchTerm);
      else
      this.gems = gemService.getAll();
    })
  }
}
