import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AllBooksComponent } from './components/all-book/all-book.component';
import { BookDetailsComponent } from './components/book-details/book-details.component';
import { BooksComponent } from './books.component';
import { RecentBooksComponent } from './components/recent-books/recent-books.component';
import { AddBooksComponent } from './components/add-books/add-books.component';
import { AddBookReactiveComponent } from './components/add-book-reactive/add-book-reactive.component';

const routes: Routes = [
  { path: '', component: AllBooksComponent },
  { path: 'recent', component: RecentBooksComponent },
  { path: 'new', component : AddBooksComponent },
  { path: 'new-reactive', component : AddBookReactiveComponent },
  { 
    path: ':id', 
    component: BookDetailsComponent 
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BookRoutingModule { }