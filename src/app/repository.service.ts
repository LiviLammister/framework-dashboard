import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, merge } from 'rxjs';

import { IRepository } from './irepository';

const BASE_URL = 'https://api.github.com/repos'
const ANGULAR_URL = `${BASE_URL}/angular/angular`;
const EMBER_URL = `${BASE_URL}/emberjs/ember.js`;
const REACT_URL = `${BASE_URL}/facebook/react`;
const VUE_URL = `${BASE_URL}/vuejs/vue`

@Injectable({
  providedIn: 'root'
})
export class RepositoryService {

  constructor(private http: HttpClient) { }

  getRepositories(): Observable<Object> {
    return merge(
      this.http.get(ANGULAR_URL),
      this.http.get(EMBER_URL),
      this.http.get(REACT_URL),
      this.http.get(VUE_URL)
    )
  }
}
