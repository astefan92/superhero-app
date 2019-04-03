import { NgModule } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { UserStateService } from './state-services/user-state.service';

@NgModule({
  providers: [
    AuthService,
    UserStateService,
  ]
})
export class SharedModule { }
