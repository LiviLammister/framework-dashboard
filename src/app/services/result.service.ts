import { Injectable } from '@angular/core';

import { IResult } from '../interfaces/iresult';

const MOCK_RESULTS: IResult[] = [
  { name: 'angular', count: 10 },
  { name: 'ember', count: 20 },
  { name: 'react', count: 30 },
  { name: 'vue', count: 40 }
];

@Injectable({
  providedIn: 'root'
})
export class ResultService {

  constructor() { }

  getResults() {
    return MOCK_RESULTS;
  }
}
