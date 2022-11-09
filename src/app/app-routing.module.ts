import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddMovieComponent } from './add-movie/add-movie.component';
import { MoviedetailsComponent } from './moviedetails/moviedetails.component';
import { MovielistComponent } from './movielist/movielist.component';

const routes: Routes = [
  {path:'',component:MovielistComponent},
  {path:'moviesDetails',component:MoviedetailsComponent},
  {path:'addMovie',component:AddMovieComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 

}
