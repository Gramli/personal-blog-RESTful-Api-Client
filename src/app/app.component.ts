import { Component } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'personal-blog-RESTful-Api-Client';

  constructor(public auth: AuthService) { }

  public logout(): void {
    // Remove tokens and expiry time
    // Remove isLoggedIn flag from localStorage
    localStorage.removeItem('isLoggedIn');
    // Go back to the home route
    this.auth.logout({
    returnTo: 'http://localhost:4200',
    });
  }
}
