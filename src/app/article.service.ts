import { Injectable } from '@angular/core';
import { ArticleHeader } from './articleHeader'
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { Article } from './article';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  private blogUrl = 'http://localhost:9000/articles';

  constructor(private http: HttpClient) { }

  getArticleHeaders() :Observable<ArticleHeader[]> {
    return this.http.get<ArticleHeader[]>(this.blogUrl);
  }

  getArticle(articleId) : Observable<Article>{
    const url = `${this.blogUrl}/${articleId}`;
    return this.http.get<Article>(url)
    .pipe(
      tap(_ => console.info(`get article ok`)),
      catchError(this.handleError<Article>(`get article`, null))
    );
  }

  deleteArticle(articleId){
    const url = `http://localhost:9000/admin/delete/${articleId}`; //TODO FIX
    return this.http.delete(url);
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
