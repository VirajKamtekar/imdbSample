import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http'
import { Observable } from 'rxjs';
import { MoviesList } from './movies-model';
import { environment } from 'src/environments/environment';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor(private http:HttpClient) { }

  public getAllMovies(): Observable<any[]>{
    let headers=new HttpHeaders().set('X-RapidAPI-Key','b5b3b36033msh0f99e0c352eb7c0p141f82jsn34c40b158e76').set('X-RapidAPI-Host','imdb8.p.rapidapi.com')
    .set('Content-Type','application/json');
    return this.http.get<any[]>(`https://imdb8.p.rapidapi.com/auto-complete?q=home`,{headers});
  }

  private singleMovie = new BehaviorSubject<any>('Some Message');
  currentMovie=this.singleMovie.asObservable();

  changeMovie(movie:any){
    this.singleMovie.next(movie);
  }
  

}
