import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { __param } from 'tslib';

@Component({
  selector: 'app-book-details',
  imports: [],
  templateUrl: './book-details.component.html',
  styleUrl: './book-details.component.scss'
})
export class BookDetailsComponent implements OnInit {

    public id : number = 0;
    public authorId : number = 0;
    public name : string = '';

    constructor(private route: ActivatedRoute){}

    ngOnInit(): void {
      this.route.params.subscribe((param) => {
          this.id = param['id'];
          this.authorId = param['authorId'];
          this.name = param['name'];
      });
      

      this.route.queryParams.subscribe((queryParam) => {
        this.name = queryParam['name'];
        console.log(queryParam);
    });
    }
}
