import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { MoviesList } from '../movies-model';
import { MoviesService } from '../movies.service';

@Component({
  selector: 'app-movielist',
  templateUrl: './movielist.component.html',
  styleUrls: ['./movielist.component.css']
})
export class MovielistComponent implements OnInit {

  moviesList!:any[];
  data:any ='d';
  movie:string="dad";
  ngOnInit(): void {
    this.getMovies()
  }

  constructor(private movieService:MoviesService,private router:Router ){
  }

  public getMovies():void{
    this.movieService.getAllMovies().subscribe(
      (response:any[])=>{
        this.moviesList=Object.values(response[this.data]);
        console.log(this.moviesList);
        
      },
      (error:any)=>{
        console.log("Error")
      }
    )
  }

  public OnMovieDetails(movies:any):void{
    this.router.navigateByUrl('moviesDetails');
    this.movieService.changeMovie(movies)
  }

  
}
