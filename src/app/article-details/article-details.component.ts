import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { ArticleService } from '../article.service';
import { ArticleContent } from '../article-Content';
import { ArticleHeader } from '../articleHeader';

@Component({
  selector: 'app-article-details',
  templateUrl: './article-details.component.html',
  styleUrls: ['./article-details.component.css']
})
export class ArticleDetailsComponent implements OnInit {

  articleHeader: ArticleHeader;
  articleContent: ArticleContent;

  constructor(
    private route: ActivatedRoute,
    private articleService: ArticleService,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.getArticleDetail();
  }

  getArticleDetail(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.articleService.getArticle(id)
      .subscribe(ad => {
          this.articleContent = ad.articleContent; 
          this.articleHeader = ad.articleHeader; 
        });
  }

}
