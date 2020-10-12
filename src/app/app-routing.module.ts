import { NgModule } from '@angular/core';
import { ArticlesComponent } from './articles/articles.component';
import { ArticleDetailsComponent } from './article-details/article-details.component';
import { AddArticleComponent } from './add-article/add-article.component';
import { HomeComponent } from './home/home.component';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {path: 'articles', component: ArticlesComponent},
  {path: 'articles/:id', component: ArticleDetailsComponent},
  {path: 'addarticle', component: AddArticleComponent},
  {path: 'home', component: HomeComponent},
  {path: 'admin', component: LoginComponent},
  {path: '',   redirectTo: 'home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
