import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { NewsList } from '../model/news-list.model';

const baseURL = "http://api.mediastack.com/v1/";
// const key = "9c813ad8fc504660bdb0a4af7cf8c075";
const key = "abd20eb84a3a47864d4d8a8db6bc4b25";

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  constructor(private http: HttpClient) { }

  getNews(params?:any): Observable<NewsList> {

    let queryParameters = {}

    if(params) {
      queryParameters = {
        params: new HttpParams()
        .set("offset", params.page || "")
        .set("limit", params.pageSize || "")
        .set("sort", params.sortDirection || "")
        .set("languages", params.filter.language && JSON.stringify(params.filter.lanuage) || "")
        .set("access_key", key)
        .set("countries", "us")
        .set("categories", params.category || "")
        .set("keywords", params.keywords || "")
      }
    }
    return this.http.get(`${baseURL}news`, queryParameters).pipe(map((x:any) => {
      return new NewsList(x);
    }))
  }
}
