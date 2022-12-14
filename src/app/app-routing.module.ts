import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PokeComponentComponent } from './component/poke-component/poke-component.component';

const routes: Routes = [
  {path:'',component:PokeComponentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
