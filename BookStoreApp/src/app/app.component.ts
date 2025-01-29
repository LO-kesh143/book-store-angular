import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

//imports: [RouterOutlet, AboutUsComponent, ChangePasswordComponent, LoginComponent, SignupComponent, HowItWorksComponent, AllBooksComponent, BookDetailsComponent, HomeComponent],

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  // template: `
  //   <nav>
  //     <a routerLink="/home">Home</a> | 
  //     <a routerLink="/all-books">About</a> | 
  //     <a routerLink="/book-details">About</a> | 
  //     <a routerLink="/how-it-works">About</a> | 
  //     <a routerLink="/signup">About</a> | 
  //     <a routerLink="/login">About</a> | 
  //     <a routerLink="/change-password">About</a> 
  //   </nav>
  //   <router-outlet></router-outlet>
  // `,
  styleUrl: './app.component.scss',
})
export class AppComponent {
  email = 'sample@gmail.com';
  title = 'BookStoreApp';
}
