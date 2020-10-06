import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { ArticleService } from '../article.service';
import { ArticleDetail } from '../article-detail';

@Component({
  selector: 'app-article-details',
  templateUrl: './article-details.component.html',
  styleUrls: ['./article-details.component.css']
})
export class ArticleDetailsComponent implements OnInit {

  articleDetail: ArticleDetail;

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
    this.articleService.getArticleDetails(id)
      .subscribe(ad => this.articleDetail = ad);
  }

}
