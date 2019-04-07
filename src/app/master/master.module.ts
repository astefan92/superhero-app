import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MasterRoutingModule } from './master-routing.module';
import { DetailPageComponent } from './detail/detail.page';
import { ListPageComponent } from './list/list.page';
import { SharedModule } from '../shared/shared.module';
import { IonicModule } from '@ionic/angular';
import { MenuPageComponent } from './menu/menu.page';

@NgModule({
  declarations: [
    ListPageComponent,
    DetailPageComponent,
    MenuPageComponent
  ],
  imports: [
    CommonModule,
    MasterRoutingModule,
    IonicModule,
    SharedModule,
  ],
})
export class MasterModule { }
