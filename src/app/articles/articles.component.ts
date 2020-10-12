import { Component, OnInit } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import { ArticleService } from '../article.service';
import { ArticleHeader } from '../articleHeader';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
})
export class ArticlesComponent implements OnInit {

  articles: ArticleHeader[];

  constructor(private articleService: ArticleService, public auth: AuthService) { }

  ngOnInit(): void {
    this.initArticles();
  }

  initArticles() : void {
    this.articleService.getArticleHeaders().subscribe(articles=> this.articles = articles);
  }

}
