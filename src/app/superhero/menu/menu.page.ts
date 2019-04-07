
import { Component, OnInit } from '@angular/core';
import { Router, RouterEvent } from '@angular/router';
import { UseExistingWebDriver } from 'protractor/built/driverProviders';
import { User } from 'src/app/shared/models/user.model';
import { UserStateService } from 'src/app/shared/state-services/user-state.service';

export interface Page {
    title: string;
    url: string;
    icon: string;
}

@Component({
    selector: 'menu',
    templateUrl: './menu.page.html',
    styleUrls: ['./menu.page.scss'],
})
export class MenuPageComponent implements OnInit{
    public pages: Page[] = [
        { title: 'Superheroes', url: '/menu/list', icon: 'people' },
        { title: 'Logout', url: '/signin', icon: 'log-out' },
    ];

    public selectedPath = '';
    public currentUser: User;

    constructor(private router: Router, private userStateService: UserStateService) {
        this.router.events.subscribe((ev: RouterEvent) => {
            this.selectedPath = ev.url;
        });
        this.userStateService.observeCurrentUser.subscribe((user: User) => {
            this.currentUser = user;
        });
    }

    ngOnInit() {
        this.router.navigate(['/menu/list']);
    }
}
