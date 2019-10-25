import { Component, OnInit } from '@angular/core';
import { Sort } from '@angular/material/sort';
import { interval } from 'rxjs';
import { switchMap } from 'rxjs/operators';

import { ResultService } from 'src/app/services/result.service';
import { IResult } from 'src/app/interfaces/iresult';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.sass']
})
export class ResultsComponent implements OnInit {
  results: IResult[];
  sortedData: IResult[];
  subscription

  constructor(private resultsService: ResultService) { }


  sortData(sort: Sort) {
    const data = this.results.slice();
    if (!sort.active || sort.direction === '') {
      this.sortedData = data;
      return;
    }

    this.sortedData = data.sort((a, b) => {
      const isAsc = sort.direction === 'asc';
      switch (sort.active) {
        case 'name': return compare(a.name, b.name, isAsc);
        case 'count': return compare(a.count, b.count, isAsc);
        default: return 0;
      }
    });
  }
  ngOnInit() {
    this.subscription = interval(1000).pipe(
      switchMap(() => this.resultsService.getResults())
    ).subscribe((data: IResult[]) => {
      this.results = data;
      this.sortedData = this.results.slice()
    })
  }

}

function compare(a: number | string, b: number | string, isAsc: boolean) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}