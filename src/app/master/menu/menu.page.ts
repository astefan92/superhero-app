
import { Component, ViewChild } from '@angular/core';
import { MenuController, IonNav } from '@ionic/angular';
import { Router, RouterEvent } from '@angular/router';

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
export class MenuPageComponent {
    @ViewChild(IonNav) nav: IonNav;

    pages: Page[] = [
        { title: 'Superheroes', url: '/menu/list', icon: 'people' },
        { title: 'Logout', url: '/signin', icon: 'log-out' },
    ];

    selectedPath = '';

    constructor(private router: Router) {
        this.router.events.subscribe((ev: RouterEvent) => {
            this.selectedPath = ev.url;
        });
     }
}
