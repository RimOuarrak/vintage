import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GemPageComponent } from './components/pages/gem-page/gem-page.component';
import { HomeComponent } from './components/pages/home/home.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'search/:searchTerm',component:HomeComponent},
  {path: 'tag/:tag', component:HomeComponent},
  {path: 'gem/:id', component:GemPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
