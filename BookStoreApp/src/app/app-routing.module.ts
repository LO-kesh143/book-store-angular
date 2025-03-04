import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from '../public-components/about-us/about-us.component';
import { AuthComponent } from './auth/auth.component';
import { BooksComponent } from './books/books.component';
import { HowItWorksComponent } from '../public-components/how-it-works/how-it-works.component';
import { NotFoundComponent } from './shared/components/not-found/not-found.component';
import { UserComponent } from './user/user.component';
import { HomeComponent } from '../public-components/home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full', title : 'Wel-Come the BookStore' },
  { path: 'about-us', component: AboutUsComponent, title : 'About Us'},
  { path: 'how-it-works', component: HowItWorksComponent, title : 'How It Works' },
  {
    path: 'auth',
    // component: AuthComponent,
    loadChildren: () => import('./auth/auth.module').then((x) => x.AuthModule),
    title : 'Authentication'
  },
  {
    path: 'books',
    //component: BooksComponent,
    loadChildren: () => import('./books/books.module').then((x) => x.BooksModule),
    title : 'Books'
  },
  {
    path: 'user/:userId',
    //component: UserComponent,
    loadChildren: () => import('./user/user.module').then((x) => x.UserModule),
    title : 'User'
  },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }