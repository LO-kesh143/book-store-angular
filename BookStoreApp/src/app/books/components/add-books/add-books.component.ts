import { AfterViewChecked, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { BookService } from '../../services/book.service';
import { BookModel } from '../../models/book.model';
import { publicDecrypt } from 'crypto';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-add-books',
  standalone : false,
  templateUrl: './add-books.component.html',
  styleUrl: './add-books.component.scss'
})
export class AddBooksComponent implements OnInit {
  
  @ViewChild('myForm') myForm: NgForm;

  prices: any[] = [
    {value: 100, viewValue: '₹ 100'},
    {value: 200, viewValue: '₹ 200'},
    {value: 300, viewValue: '₹ 300'},
  ];

  public model : BookModel;
  constructor(private _bookService : BookService) { }


  ngOnInit(): void {
    this.model = new BookModel();
    // this.model.title = "Book";
    // this.model.author = "Lokesh";
    this.model.totalPages = 100;
    this.model.price = {
      value : 100,
      currency : '₹'
    };
    this.model.isPublished = true;
  }

  saveBook() : void {
      console.log(this.model);
    
    if(this.myForm.valid)
    {
      this._bookService.addBook(this.model);
    }
    else{
      alert('Form is invalid.')
    }
  }

  

}
