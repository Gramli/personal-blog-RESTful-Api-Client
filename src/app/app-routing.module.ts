import { NgModule } from '@angular/core';
import { ArticlesComponent } from './articles/articles.component';
import { ArticleDetailsComponent } from './article-details/article-details.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path: 'articles', component: ArticlesComponent},
  {path: 'articles/:id', component: ArticleDetailsComponent},
  {path: 'home', component: HomeComponent},
  {path: 'about', component: AboutComponent},
  {path: '',   redirectTo: 'home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
