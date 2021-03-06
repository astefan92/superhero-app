import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { SigninPageComponent } from './auth/signin/signin.page';

const routes: Routes = [
  { path: 'signin', component: SigninPageComponent },
  { path: '', loadChildren: './superhero/superhero.module#SuperheroModule' }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
