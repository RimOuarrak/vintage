import { Component, OnInit } from '@angular/core';
import { GemService } from 'src/app/services/gem.service';
import { Tag } from 'src/app/shared/models/Tag';

@Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.css']
})
export class TagsComponent implements OnInit{
tags?:Tag[];
constructor(GemService: GemService) {
  this.tags = GemService.getAllTags();
}

ngOnInit(): void {
}
}
