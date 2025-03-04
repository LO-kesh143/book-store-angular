import { Component, OnInit } from '@angular/core';
import { BookModel } from '../../models/book.model';
import { BookService } from '../../services/book.service';

@Component({
  selector: 'app-recent-books',
  standalone: false,
  templateUrl: './recent-books.component.html',
  styleUrl: './recent-books.component.scss'
})
export class RecentBooksComponent implements OnInit {

  public recentBooks: BookModel[];
  
  constructor(private _bookService: BookService) { }

  ngOnInit(): void {
    this.getRecentBooks();
  }

  private getRecentBooks(): void {
    //this.recentBooks = this._bookService.recentBooks();
  }
}
