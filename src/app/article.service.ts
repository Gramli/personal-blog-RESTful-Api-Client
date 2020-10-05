import { Injectable } from '@angular/core';
import { Article } from './article'
import { ArticleDetail } from './article-detail'
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  constructor() { }

  getArticles() :Observable<Article[]> {
    return of(null);
  }

  getArticleDetails(articleId) : Observable<ArticleDetail>{
    return of(null);
  }

}
