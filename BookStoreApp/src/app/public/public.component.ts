import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Console } from 'console';

@Component({
  selector: 'app-public',
  imports: [],
  templateUrl: './public.component.html',
  styleUrl: './public.component.scss'
})
export class PublicComponent implements OnInit {
    bookId : number = 1;
    authorId : number = 100;

    constructor (private route : ActivatedRoute) {}

    ngOnInit(): void {
      this.route.firstChild?.params.subscribe(param => {
          console.log(param);
      });
    }  
}
