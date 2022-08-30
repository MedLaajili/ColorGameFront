import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {IonicModule} from "@ionic/angular";
import { LoginFormComponent } from './login-form/login-form.component';
import {ReactiveFormsModule} from "@angular/forms";
import "@angular/compiler"
import {routingComponents} from "../app-routing.module";
import {MatCardModule} from "@angular/material/card";
import {MatExpansionModule} from "@angular/material/expansion";
import {MatGridListModule} from "@angular/material/grid-list";
import {MatTableModule} from "@angular/material/table";
import {MatListModule} from "@angular/material/list";
import {MatTabsModule} from "@angular/material/tabs";




@NgModule({
    declarations: [
      routingComponents,
  ],
    exports: [
        LoginFormComponent
    ],
  imports: [
    CommonModule,
    IonicModule,
    ReactiveFormsModule,
    MatCardModule,
    MatExpansionModule,
    MatGridListModule,
    MatTableModule,
    MatListModule,
    MatTabsModule,
  ]
})
@NgModule()
export class UserAuthModule { }
