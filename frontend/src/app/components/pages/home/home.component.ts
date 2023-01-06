import { Component } from '@angular/core';
import { GemService } from 'src/app/services/gem.service';
import { Gem } from 'src/app/shared/models/Gem';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  gems:Gem[] = [];
  constructor(private gemService:GemService)
  {
    this.gems = gemService.getAll();
  }
}
