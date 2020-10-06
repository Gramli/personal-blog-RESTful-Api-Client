import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { AuthModule } from '@auth0/auth0-angular';
import { AuthButtonComponent } from './auth-button/auth-button.component';
import { ProfileComponent } from './profile/profile.component';
import { ArticlesComponent } from './articles/articles.component';
import { ArticleDetailsComponent } from './article-details/article-details.component'

@NgModule({
  declarations: [
    AppComponent,
    AuthButtonComponent,
    ProfileComponent,
    ArticlesComponent,
    ArticleDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AuthModule.forRoot({
      domain: 'dev-6zaf-em0.eu.auth0.com',
      clientId: 'tU6f3mdFrEc1t1xQiA9qZ4KfXO3pvJwR'
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
