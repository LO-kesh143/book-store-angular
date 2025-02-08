import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllBooksComponent } from './components/all-book/all-book.component';
import { BookDetailsComponent } from './components/book-details/book-details.component';
import { BookRoutingModule } from './books-routing.module';
import { BooksComponent } from './books.component';
import { SharedModule } from '../shared/shared.module';
//import { BookService } from './services/book.service';

@NgModule({
  declarations: [
    AllBooksComponent,
    BookDetailsComponent,
    BooksComponent,
  ],
  imports: [CommonModule, BookRoutingModule, SharedModule],
  //providers: [BookService]
})
export class BooksModule { }