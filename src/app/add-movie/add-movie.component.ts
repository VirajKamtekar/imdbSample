import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-movie',
  templateUrl: './add-movie.component.html',
  styleUrls: ['./add-movie.component.css']
})
export class AddMovieComponent implements OnInit {

  constructor(private router:Router) { }

  isDisabled:boolean=true;
  ngOnInit(): void {
  }

  public getBack(){
    this.router.navigateByUrl('');
  }  

  public addMovie(movie:NgForm):void{
    console.log(movie.value);
    movie.reset();
    alert("Data Submited Successfully")
  }
}
