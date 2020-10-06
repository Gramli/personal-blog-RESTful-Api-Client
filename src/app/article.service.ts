import { Injectable } from '@angular/core';
import { Article } from './article'
import { ArticleDetail } from './article-detail'
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  private blogUrl = 'http://localhost:9000/articles';

  constructor(private http: HttpClient) { }

  getArticles() :Observable<Article[]> {
    return this.http.get<Article[]>(this.blogUrl);
  }

  getArticleDetails(articleId) : Observable<ArticleDetail>{
    const url = `${this.blogUrl}/${articleId}`
    return this.http.get<ArticleDetail>(url)
    .pipe(
      tap(_ => console.info(`get article ok`)),
      catchError(this.handleError<ArticleDetail>(`get article`, null))
    );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
  
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead
  
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

}
