import { Component, Input, OnInit } from '@angular/core';
import { Data } from 'src/app/model/data.model';

@Component({
  selector: 'app-news-content-item',
  templateUrl: './news-content-item.component.html',
  styleUrls: ['./news-content-item.component.scss']
})
export class NewsContentItemComponent implements OnInit {
  @Input()
  news: Data = new Data();
  
  constructor() { }

  ngOnInit(): void {
  }

}
