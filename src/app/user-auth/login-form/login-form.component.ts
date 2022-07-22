import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {User} from "../user";
import {UsersDataService} from "../../services/users-data.service";
@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {
  user:User = new User();
  showPassword: boolean = false;

  constructor(private userData:UsersDataService) { }

  ngOnInit(): void {
  }
  loginForm=new FormGroup({
    email:new FormControl('',[Validators.required,Validators.email]),
    password:new FormControl('',Validators.required)
  })
  onSubmit() {
    // console.log(data)
    this.user.username = this.loginForm.value.email;
    this.user.password = this.loginForm.value.password;
    this.userData.saveUser(this.user).subscribe(data=>{
      console.log(data)
      // this.tokenStorage.saveToken(data.accessToken);
      // this.tokenStorage.saveUser(data)
      // this.reloadPage();
    alert("Successfully Logged in, Welcome Back ")
    },error => alert("Login failed"))
  }

  showHidePassword() {
    this.showPassword = !this.showPassword;
  }

  reloadPage(): void{
    window.location.reload();
  }
}
