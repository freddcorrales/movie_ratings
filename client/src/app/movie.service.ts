import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import {Observable} from "rxjs/observable";
import 'rxjs';
import "rxjs/add/operator/map"

@Injectable()
export class MovieService {

  constructor(
    private _http: Http
  ) { }

  getMovies(){
    return this._http.get("/movies")
    .map(data => data.json()).toPromise()
  }

  createMovie(movie){
    return this._http.post("/movies/new", movie)
    .map(data => data.json()).toPromise()
  }

  update(movie, id){//we are graving the whole user we are updating. We can pass in the user and id as well if we wanted to 
    console.log("eo",movie)
    return this._http.post("/movies/" + id, movie)
    .map(data => data.json()).toPromise() //we are also passing the user object as a post data so the put of the post request it recludes the id in the URL and it also includes the object there
  }

  getMovieById(id){
    
    return this._http.get("/movie/"+ id)
    .map(data => data.json()).toPromise()

  }

  destroy(id){
    return this._http.delete("/movie/" +id+ "/destroy")
    .map(data => data.json()).toPromise()
  }

 

}

