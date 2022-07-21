import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {UsersDataService} from '../../services/users-data.service'
import {User} from "../user";
@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {
  user:User = new User();
  constructor(private userData:UsersDataService) {


  }

  ngOnInit(): void {
  }
  loginForm= new FormGroup({
    email:new FormControl('',[Validators.required,Validators.email,Validators.minLength(6)]),
    password:new FormControl('',[Validators.required,Validators.minLength(5)])
});
  onSubmit() {
    // console.warn(data);
    this.user.username = this.loginForm.value.email;
    this.user.password = this.loginForm.value.password
    this.userData.saveUser(this.user).subscribe(user=>{
      console.log(user)
      alert("Successfully User is registered")
    },error => alert("User is not registered"))
  }
}
