import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { UserStateService } from '../shared/state-services/user-state.service';

@Injectable()
export class AuthService {

    constructor(private router: Router, private userStateService: UserStateService) {}

    public login(email: string, password: string) {
        this.userStateService.currentUser = { email };
        this.router.navigate(['/']);
    }
}