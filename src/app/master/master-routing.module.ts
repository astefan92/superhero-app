import { NgModule } from '@angular/core';
import {
  RouterModule,
  Routes
} from '@angular/router';
import { ListPageComponent } from './list/list.page';
import { DetailPageComponent } from './detail/detail.page';
import { AuthGuard } from '../shared/guards/auth.guard';
import { MenuPageComponent } from './menu/menu.page';

const masterRoutes: Routes = [
  {
    path: 'menu',
    component: MenuPageComponent,
    children: [
      {
        path: 'list',
        component: ListPageComponent,
      },
      {
        path: 'list/:id',
        component: DetailPageComponent,
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
    RouterModule.forChild(masterRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class MasterRoutingModule { }