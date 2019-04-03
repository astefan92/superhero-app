import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MasterRoutingModule } from './master-routing.module';
import { DetailPageComponent } from './detail/detail.page';
import { ListPageComponent } from './list/list.page';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    ListPageComponent,
    DetailPageComponent,
  ],
  imports: [
    CommonModule,
    MasterRoutingModule,
    SharedModule,
  ],
})
export class MasterModule { }
