import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: false,  // <-- This makes it standalone
  // imports: [],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  public name: string = ''

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
  
    };
  }
