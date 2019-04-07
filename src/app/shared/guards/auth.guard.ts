import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

import { UserStateService } from '../state-services/user-state.service';

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {
    constructor(
        private router: Router,
        private userStateService: UserStateService
    ) {}

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        const currentUser = this.userStateService.currentUser;
        if (currentUser) {
            return true;
        }

        this.router.navigate(['/signin']);
        return false;
    }
}
