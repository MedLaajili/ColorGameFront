import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {User} from "../user";
import {UsersDataService} from "../../services/users-data.service";
import {Router} from "@angular/router";
@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

  showPassword: boolean = false;
  // username=null;
  // password=null;
  constructor(private userData:UsersDataService, private router:Router) { }

  ngOnInit(): void {
  }
  loginForm=new FormGroup({
    username:new FormControl('',[Validators.required,Validators.email]),
    password:new FormControl('',Validators.required)
  })

  userLogin(username,password) {
    // console.log(data)
    // let username = this.loginForm.value.username;
    // let password = this.loginForm.value.password;
    this.userData.loginUser(username,password).subscribe(data=>{
      this.router.navigateByUrl("/")
      // this.tokenStorage.saveToken(data.accessToken);
      // this.tokenStorage.saveUser(data)
      // this.reloadPage();
    alert("Successfully Logged in, Welcome Back ")
    },error => alert("Please enter Correct Username and Password"))
  }

  showHidePassword() {
    this.showPassword = !this.showPassword;
  }

}
