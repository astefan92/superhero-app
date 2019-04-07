import { NgModule } from '@angular/core';
import {
  RouterModule,
  Routes
} from '@angular/router';
import { SuperheroListPageComponent } from './superhero-list/superhero-list.page';
import { SuperheroDetailPageComponent } from './superhero-detail/superhero-detail.page';
import { AuthGuard } from '../shared/guards/auth.guard';
import { MenuPageComponent } from './menu/menu.page';

const superheroRoutes: Routes = [
  {
    path: 'menu',
    component: MenuPageComponent,
    children: [
      {
        path: 'list',
        component: SuperheroListPageComponent,
      },
      {
        path: 'list/:id',
        component: SuperheroDetailPageComponent,
      },
    ],
    canActivate: [AuthGuard],
  },
  {
    path: '',
    redirectTo: '/menu'
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(superheroRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class SuperheroRoutingModule { }