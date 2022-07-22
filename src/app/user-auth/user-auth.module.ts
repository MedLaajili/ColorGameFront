import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {IonicModule} from "@ionic/angular";
import { LoginFormComponent } from './login-form/login-form.component';
import {ReactiveFormsModule} from "@angular/forms";
import "@angular/compiler"




@NgModule({
    declarations: [
     LoginFormComponent
  ],
    exports: [
        LoginFormComponent
    ],
  imports: [
    CommonModule,
    IonicModule,
    ReactiveFormsModule,
  ]
})
@NgModule()
export class UserAuthModule { }
