import { Component, OnInit } from '@angular/core';

import { ResultService } from 'src/app/services/result.service';
import { IResult } from 'src/app/interfaces/iresult';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.sass']
})
export class ResultsComponent implements OnInit {
  results: IResult[] = []

  constructor(private resultsService: ResultService) { }

  ngOnInit() {
    this.results = this.resultsService.getResults()
  }

}
