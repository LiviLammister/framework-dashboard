import { Component, OnInit } from '@angular/core';
import { Sort } from '@angular/material/sort';

import { RepositoryService } from '../../services/repository.service';

@Component({
  selector: 'app-framework-table',
  templateUrl: './framework-table.component.html',
  styleUrls: ['./framework-table.component.sass']
})
export class FrameworkTableComponent implements OnInit {
  repos;
  sortedRepos;

  constructor(private repositoryService: RepositoryService) { }

  sortData(sort: Sort) {
    const data = this.repos.slice();
    if (!sort.active || sort.direction === '') {
      this.sortedRepos = data;
      return;
    }

    this.sortedRepos = data.sort((a, b) => {
      const isAsc = sort.direction === 'asc';
      switch (sort.active) {
        case 'name': return compare(a.name, b.name, isAsc);
        case 'forks_count': return compare(a.forks_count, b.forks_count, isAsc);
        case 'open_issues_count': return compare(a.open_issues_count, b.open_issues_count, isAsc);
        case 'watchers_count': return compare(a.watchers_count, b.watchers_count, isAsc);
        default: return 0;
      }
    });
  }

  ngOnInit() {
    this.repositoryService.getRepositories().subscribe((data) => {
      this.repos = data;
      this.sortedRepos = this.repos.slice();
    })
  }
}

function compare(a: number | string, b: number | string, isAsc: boolean) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}