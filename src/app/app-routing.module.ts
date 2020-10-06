import { NgModule } from '@angular/core';
import { ArticlesComponent } from './articles/articles.component';
import { ArticleDetailsComponent } from './article-details/article-details.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path: "articles", component: ArticlesComponent},
  {path: "articles/:id", component: ArticleDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
