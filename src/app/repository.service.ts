import { Injectable } from '@angular/core';
import { IRepository } from './irepository';

@Injectable({
  providedIn: 'root'
})
export class RepositoryService {

  constructor() { }

  getRepositories(): IRepository[] {
    return [
      {name: 'Angular', numIssues: 1, numPullRequests: 2, numDownloads: 3},
      {name: 'Ember', numIssues: 2, numPullRequests: 3, numDownloads: 4},
      {name: 'React', numIssues: 3, numPullRequests: 4, numDownloads: 1},
      {name: 'Vue', numIssues: 4, numPullRequests:1, numDownloads: 2},
    ];
  }
}
