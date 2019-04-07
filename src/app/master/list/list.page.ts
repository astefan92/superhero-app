
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})

export class ListPageComponent implements OnInit {
  constructor(private router: Router) { }
  ngOnInit() { }

  navigateToDetail() {
    this.router.navigate(['/menu/list/1']);
  }
}
