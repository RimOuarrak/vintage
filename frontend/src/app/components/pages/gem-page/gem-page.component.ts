import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GemService } from 'src/app/services/gem.service';
import { Gem } from 'src/app/shared/models/Gem';

@Component({
  selector: 'app-gem-page',
  templateUrl: './gem-page.component.html',
  styleUrls: ['./gem-page.component.css']
})
export class GemPageComponent implements OnInit{
  gem!: Gem;
  constructor(activatedRoute:ActivatedRoute, gemService:GemService) {
    activatedRoute.params.subscribe((params) => {
      if(params.id)
        this.gem = gemService.getGemById(params.id);
    })
  }

  ngOnInit(): void {
    
  }
}

