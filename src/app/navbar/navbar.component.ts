import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})

export class NavbarComponent implements OnInit {
  loginSignup: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

  loginOrSignup() {
    this.loginSignup=!this.loginSignup
  }
  path='home'
}
