
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SuperheroApiService } from '../superhero-api.service';
import { Superhero } from 'src/app/shared/models/superhero.model';

@Component({
  selector: 'superhero-list',
  templateUrl: './superhero-list.page.html',
  styleUrls: ['./superhero-list.page.scss'],
})

export class SuperheroListPageComponent implements OnInit {
  public superheroes: Superhero[];

  constructor(private router: Router, private superheroApiService: SuperheroApiService) { }

  ngOnInit() {
    this.superheroApiService.getSuperheroes().subscribe();
    this.superheroApiService.superheroes.subscribe((superheroes) => this.superheroes = superheroes);
  }

  navigateToDetail(superhero: Superhero) {
    this.router.navigate([`/menu/list/${superhero.id}`]);
  }

  getThumbnailUrl(thumbnail: any) {
    return thumbnail.path + '/portrait_small.jpg';
  }
}
