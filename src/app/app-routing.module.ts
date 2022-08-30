import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {LoginFormComponent} from "./user-auth/login-form/login-form.component";
import {SignupFormComponent} from "./user-auth/signup-form/signup-form.component";

const routes: Routes = [
  {path:'home', component: HomeComponent},
  {path:'login', component: LoginFormComponent},
  {path:'',component: SignupFormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [HomeComponent,LoginFormComponent,SignupFormComponent]
