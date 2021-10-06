import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NewsList } from '../model/news-list.model';
import { NewsService } from '../services/news.service';

@Component({
  selector: 'app-news-content',
  templateUrl: './news-content.component.html',
  styleUrls: ['./news-content.component.scss']
})
export class NewsContentComponent implements OnInit {
  news: NewsList = new NewsList();
  languageFilterActive: boolean = false;

  params = {
    page: 1,
    pageSize: 100,
    filter: {
      language: ""
    },
    sort: "",
    sortDirection: "published_asc",
    category: "",
    keywords: ""
  }
  constructor(private service: NewsService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.data.subscribe(data => {
      this.params.category = data.category;
      this.getNews();
    })
  }

  getNews() {
    this.service.getNews(this.params).subscribe((x:any) => {
      this.news = x;
    }, error => {
      alert(error);
    })
  }

  filterEnglish() {
    this.languageFilterActive = !this.languageFilterActive;
    if(this.languageFilterActive) {
      this.params.filter.language = "en";
    } else {
      this.params.filter.language = "";
    }
    this.getNews();
  }

  changeSort(newSort: string): void {
    if (newSort !== this.params.sortDirection) {
      this.params.sortDirection = newSort; 
      this.getNews();
    }
  }

  getKeyword(event: KeyboardEvent) {
    const {value} = event.target as HTMLInputElement; 
    this.params.keywords = value;
    this.getNews();
  }
}
