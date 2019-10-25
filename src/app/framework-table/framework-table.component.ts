import { Component, OnInit } from '@angular/core';

import { IRepository } from '../repository/irepository';
import { RepositoryService } from '../repository/repository.service';

@Component({
  selector: 'app-framework-table',
  templateUrl: './framework-table.component.html',
  styleUrls: ['./framework-table.component.sass']
})
export class FrameworkTableComponent implements OnInit {
  frameworkRepositories: IRepository[] = [];
  constructor(private repositoryService: RepositoryService) {}

  convertToIRepository(repo): IRepository {
    const {name, forks_count, open_issues_count, watchers_count} = repo;
    return {name, forks_count, open_issues_count, watchers_count};
  }

  ngOnInit() {
    this.repositoryService.getRepositories().subscribe(repo => {
      this.frameworkRepositories.push(this.convertToIRepository(repo))
    })
  }
}