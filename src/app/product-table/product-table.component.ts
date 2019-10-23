import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

import { IRepository } from '../irepository';
import { RepositoryService } from '../repository.service';

@Component({
  selector: 'app-product-table',
  templateUrl: './product-table.component.html',
  styleUrls: ['./product-table.component.sass']
})
export class ProductTableComponent implements OnInit {
  displayedColumns: string[] = ['name', 'download_count', 'open_issues_count', 'watchers_count'];
  dataSource: MatTableDataSource<any>;

  constructor(private repositoryService: RepositoryService) {}

  @ViewChild(MatSort, {static: true}) sort: MatSort;

  convertToIRepository(repo): IRepository {
    const {name, download_count, open_issues_count, watchers_count} = repo
    return {name, download_count, open_issues_count, watchers_count}
  }

  async ngOnInit() {
    let data = []
    await this.repositoryService.getRepositories().subscribe(repo => {
      data.push(this.convertToIRepository(repo))
    })
    console.log(data);
    this.dataSource = new MatTableDataSource(data);
    this.dataSource.sort = this.sort;
  }
}