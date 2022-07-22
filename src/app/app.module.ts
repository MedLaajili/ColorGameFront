import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DemoComponent } from './demo/demo.component';
import { NavbarComponent } from './navbar/navbar.component';
import {MatToolbarModule} from "@angular/material/toolbar";
import {SignupFormComponent} from './user-auth/signup-form/signup-form.component';
import {LoginFormComponent} from './user-auth/login-form/login-form.component'
import {FormsModule,ReactiveFormsModule} from "@angular/forms";
import { RedElDirective } from './red-el.directive';
import {HttpClientModule} from '@angular/common/http'
import {UserAuthModule} from "./user-auth/user-auth.module";
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    DemoComponent,
    NavbarComponent,
    SignupFormComponent,
    // LoginFormComponent,
    RedElDirective,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    FormsModule, ReactiveFormsModule, HttpClientModule, UserAuthModule
  ],
  providers: [],
  bootstrap: [AppComponent,NavbarComponent]
})
export class AppModule { }
