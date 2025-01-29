import { Routes } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';

import { ChangePasswordComponent } from './auth/components/change-password/change-password.component';
import { AuthComponent } from './auth/auth.component';
import { LoginComponent } from './auth/components/login/login.component';
import { SignupComponent } from './auth/components/signup/signup.component';

import { HowItWorksComponent } from './how-it-works/how-it-works.component';

import { PublicComponent } from './public//public.component';
import { AllBooksComponent } from './public/components/all-books/all-books.component';
import { BookDetailsComponent } from './public/components/book-details/book-details.component';
import { HomeComponent } from './public/components/home/home.component';

import { UserComponent } from './user/user.component';
import { AddBookComponent } from './user/components/add-book/add-book.component';
import { DeleteBookComponent } from './user/components/delete-book/delete-book.component';
import { NotFoundComponent } from './shared/components/not-found/not-found.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'public', component: PublicComponent },
    { path: 'public/home', component: HomeComponent },
    { path: 'public/all-books', component: AllBooksComponent },
    { path: 'public/book-details/:id/author/:authorId', component: BookDetailsComponent },
    { path: 'about-us', component: AboutUsComponent },
    { path: 'how-it-works', component: HowItWorksComponent },
    { path: 'auth', component: AuthComponent },
    { path: 'auth/login', component: LoginComponent },
    { path: 'auth/signup', component: SignupComponent },
    { path: 'auth/change-password', component: ChangePasswordComponent },
    { path: 'user/:userId', component: UserComponent },
    { path: 'user/add-book', component: AddBookComponent },
    { path: 'user/delete-book', component: DeleteBookComponent },
    { path: '', redirectTo: 'about-us', pathMatch: 'full' },
    { path: '**', component: NotFoundComponent },
];
