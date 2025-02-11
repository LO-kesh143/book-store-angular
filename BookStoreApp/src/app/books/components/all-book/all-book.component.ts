import { Component, OnInit } from '@angular/core';
import { BookModel } from '../../models/book.model';
import { BookService } from '../../services/book.service';
import { CounterService } from '../../../shared/services/counter.service';
import { Counter2Service } from '../../../shared/services/counter2.service';
import { publicDecrypt } from 'crypto';

@Component({
  selector: 'app-all-books',
  standalone: false,  
  templateUrl: './all-book.component.html',
  styleUrls: ['./all-book.component.scss']
})
export class AllBooksComponent implements OnInit {
  
  private _pageTitle : string;

  public set pageTitle(value: string) {
    this._pageTitle = value;
  }

  public get pageTitle() {
    return this._pageTitle;
  }
  
  public books: BookModel[] =[];

  constructor(public bookService: BookService, public _counterService: Counter2Service) {}
 
  ngOnInit(): void {
    this.pageTitle = 'All Books'

    const allBooks = this.bookService.getBooks();

    allBooks.forEach(b=> {
      var obj = new BookModel();

      obj.id = b.id;
      obj.author = b.author;
      obj.price = b.price;
      obj.title = b.title;
      obj.totalPages = b.totalPages;

      this.books.push(obj);  
    })

    console.log(this.books);
    
  }

  public increase():void{
    this._counterService.incCounter();
  }

  public decrease():void{
    this._counterService.decCounter();
  }
}