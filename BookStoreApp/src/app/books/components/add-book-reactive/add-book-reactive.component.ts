import { Component, OnInit } from '@angular/core';
import { AbstractControl, Form, FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { BookService } from '../../services/book.service';
import { title } from 'process';

@Component({
  selector: 'app-add-book-reactive',
  standalone : false,
  templateUrl: './add-book-reactive.component.html',
  styleUrl: './add-book-reactive.component.scss'
})

export class AddBookReactiveComponent implements OnInit {
  prices: any[] = [
    {value: 100, viewValue: '100'},
    {value: 200, viewValue: '200'},
    {value: 300, viewValue: '300'},
  ];

  currencies: any[] = [
    {value: '₹', viewValue: 'Indian Rupees'},
    {value: '$', viewValue: 'US Dollar'}
  ];
  
  public addBookForm : FormGroup;

  public titleErrorMessage : string;
  public authorErrorMessage : string;
  public formatTypeErrorMessage : string;
  
  constructor(private _bookService : BookService, private _formBuilder : FormBuilder) { }

  ngOnInit(): void {
    this.intiForm();
    
    // console.log(this.addBookForm.controls['title']);
    // console.log(this.addBookForm.get('title'));
    const formatTypeControl = this.addBookForm.get('formatType');
    formatTypeControl?.valueChanges.subscribe(x => {
      this.formatTypeChanged(x);
    })

    const titleControl = this.addBookForm.get('title');
    titleControl?.valueChanges.subscribe(x => {
      this.validateTitleControl(titleControl as FormControl);
    })

    const authorControl = this.addBookForm.get('author');
    authorControl?.valueChanges.subscribe(y => {
      this.validateAuthorControl(authorControl as FormControl);
    })
  }

  updateFormValue() : void {
    this.addBookForm.patchValue({
      title : 'Lokesh Kumawat',
      author : 'Self'
    })
  }

  saveBook() : void {
    console.log(this.addBookForm.value);
    
      if(this.addBookForm.valid)
      {
        this._bookService.addBook(this.addBookForm.value);
      }
      else{
        alert('Form is invalid.')
      }
    }

  private intiForm(): void {
    // this.addBookForm = new FormGroup({
    //   title : new FormControl('LokeshK', [Validators.required, Validators.minLength(9)]),
    //   author : new FormControl('Kumawat', [Validators.required, Validators.minLength(3)]),
    //   totalPages : new FormControl(),
    //   price : new FormGroup({
    //     currency : new FormControl(),
    //     value : new FormControl()
    //   }),
    //   publishedOn : new FormControl(),
    //   isPublished : new FormControl(),
    //   formatType : new FormControl(),
    //   pdfFormat : new FormControl(),
    //   docFormat : new FormControl()
    // })

    this.addBookForm = this._formBuilder.group({
      title : ['The Lion Group', [Validators.required, Validators.minLength(9)]],
      //author : ['author',Validators.required],
      totalPages : '',
      price : this._formBuilder.group({
        currency : '',
        value : ''
      }),
      publishedOn : '',
      isPublished : '',
      formatType : '',
      pdfFormat : '',
      docFormat : '',
      authors : this._formBuilder.array([
        this.getAuthorControl(),
        // this._formBuilder.group({
        //   fullName : ''
        // }),
        // this._formBuilder.group({
        //   fullName : ''
        // }),
        // this._formBuilder.group({
        //   fullName : ''
        // })
      ])
    });
  }

  private getAuthorControl(): FormGroup {
    return this._formBuilder.group({
      fullName : ''
    });
  }

  public addMoreAuthor() : void {
    this.authors.push(this.getAuthorControl());
  }

  public removeAuthor(i : number) : void {
    this.authors.removeAt(i);
  }

  private formatTypeChanged(formatType : string) : void {
    this.formatTypeErrorMessage = '';
    const pdfControl = this.addBookForm.get('pdfFormat');
    const docControl = this.addBookForm.get('docFormat');

    if(formatType === 'pdf') {
      pdfControl?.addValidators(Validators.required);
      docControl?.clearValidators();
      //this.formatTypeErrorMessage = 'This is required field';
    } else if(formatType === 'doc') {
      docControl?.addValidators(Validators.required);
      pdfControl?.clearValidators();
      //this.formatTypeErrorMessage = 'Minimum Length is ' + formatType.errors?.['minlength']?.requiredLength;
    }

    pdfControl?.updateValueAndValidity();
    docControl?.updateValueAndValidity();
  }

  public get authors() {
    return <FormArray>this.addBookForm.get('authors');
  }

  private validateTitleControl(titleControl : FormControl) : void {
    this.titleErrorMessage = '';
    if (titleControl.errors && (titleControl.touched || titleControl.dirty)) {
      if(titleControl.errors?.['required']) {
        this.titleErrorMessage = 'This is required field';
      } else if(titleControl.errors?.['minlength']) {
        this.titleErrorMessage = 'Minimum Length is ' + titleControl.errors?.['minlength']?.requiredLength;
      }
    } 
  }

  private validateAuthorControl(authorControl : FormControl) : void {
    this.authorErrorMessage = '';
    if (authorControl.errors && (authorControl.touched || authorControl.dirty)) {
      if(authorControl.errors?.['required']) {
        this.authorErrorMessage = 'This is required field';
      } else if(authorControl.errors?.['minlength']) {
        this.authorErrorMessage = 'Minimum Length is ' + authorControl.errors?.['minlength']?.requiredLength;
      }
    } 
  }
}
