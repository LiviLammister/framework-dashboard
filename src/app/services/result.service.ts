import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ResultService {

  constructor(private http: HttpClient) { }

  getResults(): Observable<Object> {
    return this.http.get('https://warm-mesa-66645.herokuapp.com/api/frameworks');
  }
}
