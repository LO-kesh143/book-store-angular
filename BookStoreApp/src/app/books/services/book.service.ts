import { Injectable } from '@angular/core';
import { BookModel } from '../models/book.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  "providedIn": "root"
    })

export class BookService {

  
  constructor(private _httpClient : HttpClient) { }

  public addBook(bookModel : BookModel) : Observable<BookModel> {
    return this._httpClient.post<BookModel>('https://localhost:7178/api/Books', bookModel)
    //this.allBooks.push(bookModel);
  }

  public getBooks(): Observable<BookModel[]> {
    return this._httpClient.get<BookModel[]>('https://localhost:7178/api/Books');

    //return this.allBooks;
  }

  // private allBooks = [
  //   {
  //     "id": 1,
  //     "title" : "Angular fundamentals",
  //     "totalPages" : 453,
  //     "author": "Ram Singh",
  //     "price": {
  //       "currency": "INR",
  //       "value" : 199
  //     }
  //   },
  //   {
  //     "id": 2,
  //     "title" : "Java fundamentals",
  //     "totalPages" : 400,
  //     "author": "Shyam",
  //     "price": {
  //       "currency": "INR",
  //       "value" : 250
  //     } 
  //   },
  //   {
  //     "id": 3,
  //     "title" : "The UPS and Downs of Life",
  //     "totalPages" : 456,
  //     "author": "Jay-Veer",
  //     "price": {
  //       "currency": "USD",
  //       "value" : 5
  //     }
  //   },
  //   {
  //     "id": 4,
  //     "title" : "Azure walkthrough",
  //     "totalPages" : 325,
  //     "author": "Pintu",
  //     "price": {
  //       "currency": "INR",
  //       "value" : 275
  //     }
  //   },
  //   {
  //     "id": 5,
  //     "title" : "C ++",
  //     "totalPages" : 987,
  //     "author": "Raghu",
  //     "price": {
  //       "currency": "INR",
  //       "value" : 500
  //     } 
  //   },
  //   {
  //     "id": 6,
  //     "title" : "C#",
  //     "totalPages" : 456,
  //     "author": "Shakti",
  //     "price": {
  //       "currency": "USD",
  //       "value" : 10
  //     }
  //   },
  //   {
  //     "id": 7,
  //     "title" : "PHP",
  //     "totalPages" : 564,
  //     "author": "Jay",
  //     "price": {
  //       "currency": "INR",
  //       "value" : 1500
  //     }
  //   }
  // ];


  // public recentBooks(): any[] 
  // {
  //   return [
  //     {
  //       "id": 1,
  //       "title" : "Angular fundamentals",
  //       "totalPages" : 453,
  //       "author": "Ram Singh",
  //       "price": {
  //         "currency": "INR",
  //         "value" : 199
  //       }
  //     },
  //     {
  //       "id": 2,
  //       "title" : "Java fundamentals",
  //       "totalPages" : 400,
  //       "author": "Shyam",
  //       "price": {
  //         "currency": "INR",
  //         "value" : 250
  //       } 
  //     }
  //   ];
  // }
}
