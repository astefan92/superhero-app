import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SigninPageComponent } from './signin/signin.page';
import {
  FormsModule,
  ReactiveFormsModule
} from '@angular/forms';
import { AuthRoutingModule } from './auth-routing.module';
import { AuthService } from './auth.service';
import { IonicModule } from '@ionic/angular';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [SigninPageComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    SharedModule,
  ],
})

export class AuthModule { }