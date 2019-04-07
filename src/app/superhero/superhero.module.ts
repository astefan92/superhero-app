import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { SuperheroRoutingModule } from './superhero-routing.module';
import { SuperheroDetailPageComponent } from './superhero-detail/superhero-detail.page';
import { SuperheroListPageComponent } from './superhero-list/superhero-list.page';
import { SharedModule } from '../shared/shared.module';
import { IonicModule } from '@ionic/angular';
import { MenuPageComponent } from './menu/menu.page';
import { SuperheroApiService } from './superhero-api.service';

@NgModule({
  declarations: [
    SuperheroListPageComponent,
    SuperheroDetailPageComponent,
    MenuPageComponent
  ],
  imports: [
    CommonModule,
    SuperheroRoutingModule,
    IonicModule,
    HttpClientModule,
  ],
  providers: [
    SuperheroApiService,
  ]
})
export class SuperheroModule { }
