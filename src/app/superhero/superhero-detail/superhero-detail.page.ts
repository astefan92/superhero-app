import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Superhero } from 'src/app/shared/models/superhero.model';
import { SuperheroApiService } from '../superhero-api.service';

@Component({
  selector: 'superhero-detail',
  templateUrl: './superhero-detail.page.html',
  styleUrls: ['./superhero-detail.page.scss'],
})
export class SuperheroDetailPageComponent implements OnInit {

  public superhero: Superhero;

  constructor(private route: ActivatedRoute, private superheroApiService: SuperheroApiService) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const superheroId = params.get('id');
      this.superhero = this.superheroApiService.getSuperhero(Number.parseInt(superheroId, 10));
      console.log(this.superhero);
    });
  }

  getThumbnailUrl(thumbnail: any) {
    return thumbnail.path + '/landscape_incredible.jpg';
  }

}
