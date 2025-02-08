import { Component, OnInit } from '@angular/core';
import { BookModel } from '../../models/book.model';
import { BookService } from '../../services/book.service';
import { CounterService } from '../../../shared/services/counter.service';

@Component({
  selector: 'app-all-books',
  standalone: false,  
  templateUrl: './all-book.component.html',
  styleUrls: ['./all-book.component.scss']
})
export class AllBooksComponent implements OnInit {
  public books: BookModel[] =[];

  constructor(public bookService: BookService, public _counterService: CounterService) {}
  // private _pageTitle!: string;

  // public set pageTitle(value: string) {
  //   this._pageTitle = value;
  // }

  // public get pageTitle() {
  //   return this._pageTitle;
  // }

  ngOnInit(): void {
    //this.pageTitle = 'All books'
    this.books = this.bookService.getBooks();
    console.log(this.books);
    
  }

  public increase():void{
    this._counterService.incCounter();
  }

  public decrease():void{
    this._counterService.decCounter();
  }
}