import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { MovielistComponent } from '../movielist/movielist.component';
import { MoviesService } from '../movies.service';

@Component({
  selector: 'app-moviedetails',
  templateUrl: './moviedetails.component.html',
  styleUrls: ['./moviedetails.component.css']
})
export class MoviedetailsComponent implements OnInit{

  image:any='i';
  titleData:any='l';
  typeData:any='q';
  yearData:any='y';
  actorsData:any='s';
  randomData!:any[];
  actorsList!:any[];
  imageUrl!:string;
  title!:string;
  type!:string;
  year!:string;
  actors!:string;
  constructor(private movieService:MoviesService,private router:Router ) { }
  movie!:any[];
  ngOnInit(): void {
    this.movieService.currentMovie.subscribe(movies=>this.movie=movies) 
    this.randomData= Object.values(this.movie[this.image]);
    this.title=this.movie[this.titleData];
    this.type=this.movie[this.typeData];
    this.year=this.movie[this.yearData];
    this.actors=this.movie[this.actorsData]
    this.imageUrl=this.randomData[1]
    this.actorsList=this.actors.split(',');
    console.log(this.actorsList);
  }

  public getBack(){
    this.router.navigateByUrl('');
  }  

  
}

