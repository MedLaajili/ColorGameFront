import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {UsersDataService} from '../../services/users-data.service'
import {User} from "../user";
import {PasswordMatch} from "../passwordMatch/password-match";
@Component({
  selector: 'app-signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.css']
})
export class SignupFormComponent implements OnInit {
  user:User = new User();
  showPassword: boolean = false;
  constructor(private userData:UsersDataService) {


  }

  ngOnInit(): void {
  }
  SignupForm= new FormGroup({
    email:new FormControl('',[Validators.required,Validators.email,Validators.minLength(6)]),
    password:new FormControl('',[Validators.required,Validators.minLength(5)]),
    confirmPassword:new FormControl('',[Validators.required])
  },
    [PasswordMatch.MatchValidator('password', 'confirmPassword')]
  );
  onSubmit() {
    // console.warn(data);
    this.user.username = this.SignupForm.value.email;
    this.user.password = this.SignupForm.value.password;
    this.user.confirmPassword = this.SignupForm.value.confirmPassword;
    this.userData.saveUser(this.user).subscribe(user=>{
      console.log(user)
      alert("Successfully Registered, Welcome among us ")
    },error => alert("Registration failed"))
  }
  showHidePassword() {
    this.showPassword = !this.showPassword;
  }
  get passwordMatchError() {
    return (
      this.SignupForm.getError('mismatch') &&
      this.SignupForm.get('confirmPassword')?.touched
    );
  }
}
