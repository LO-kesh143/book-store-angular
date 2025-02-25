import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllBooksComponent } from './components/all-book/all-book.component';
import { BookDetailsComponent } from './components/book-details/book-details.component';
import { BookRoutingModule } from './books-routing.module';
import { BooksComponent } from './books.component';
import { SharedModule } from '../shared/shared.module';
import { RecentBooksComponent } from './components/recent-books/recent-books.component';
import { BookCardComponent } from './components/book-card/book-card.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddBooksComponent } from './components/add-books/add-books.component';
import { AddBookReactiveComponent } from './components/add-book-reactive/add-book-reactive.component';

@NgModule({
  declarations: [
    AllBooksComponent,
    BookDetailsComponent,
    BooksComponent,
    RecentBooksComponent,
    BookCardComponent,
    AddBooksComponent,
    AddBookReactiveComponent
  ],
  imports: [CommonModule, BookRoutingModule, SharedModule, FormsModule, ReactiveFormsModule],
  exports: [BooksComponent]
})
export class BooksModule { }