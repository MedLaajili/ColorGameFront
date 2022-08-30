import { Component, OnInit } from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {DialogComponent} from "../dialog/dialog.component";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {PasswordMatch} from "../user-auth/passwordMatch/password-match";

export interface Tile {
  // color: string;
  // cols: number;
  // rows: number;
  // text: string;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  lignes = new Array<number>();
  colonnes = new Array<number>();

  constructor(public dialog:MatDialog) { }

  ngOnInit(): void {
  }
  tableForm= new FormGroup({
      lignes:new FormControl('',[Validators.required]),
      colonnes:new FormControl('',[Validators.required,Validators.max(5)]),
    }
  );
  openDialog() {
    this.dialog.open(DialogComponent);
  }
  onSubmit() {
    // console.warn(data);
    // @ts-ignore
    this.lignes = new Array<number>(this.tableForm.value.lignes);
    // @ts-ignore
    this.colonnes = new Array<number>(this.tableForm.value.colonnes);
    // this.user.confirmPassword = this.SignupForm.value.confirmPassword;
    // this.userData.saveUser(this.user).subscribe(user=>{
    console.log(this.lignes,this.colonnes)
  }
}
