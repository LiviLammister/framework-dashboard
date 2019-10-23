import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

import { IRepository } from '../irepository'
import { RepositoryService } from '../repository.service';

@Component({
  selector: 'app-product-table',
  templateUrl: './product-table.component.html',
  styleUrls: ['./product-table.component.sass']
})
export class ProductTableComponent implements OnInit {
  displayedColumns: string[] = ['name', 'numDownloads', 'numIssues', 'numPullRequests'];
  dataSource: MatTableDataSource<any>;

  constructor(private repositoryService: RepositoryService) {}

  @ViewChild(MatSort, {static: true}) sort: MatSort;

  ngOnInit() {
    this.dataSource = new MatTableDataSource(this.repositoryService.getRepositories());
    this.dataSource.sort = this.sort;
  }
}