import { NgModule } from '@angular/core';
import {
  RouterModule,
  Routes
} from '@angular/router';
import { ListPageComponent } from './list/list.page';
import { DetailPageComponent } from './detail/detail.page';
import { AuthGuard } from '../shared/guards/auth.guard';

const masterRoutes: Routes = [
  {
    path: '',
    component: ListPageComponent,
    canActivate: [AuthGuard]
  },
  {
    path: '/:id',
    component: DetailPageComponent
  },
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