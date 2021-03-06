import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatSortModule } from '@angular/material/sort';

import { AppComponent } from './app.component';
import { FrameworkTableComponent } from './components/framework-table/framework-table.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { VoteFormComponent } from './components/vote-form/vote-form.component';
import { ResultsComponent } from './components/results/results.component';


@NgModule({
  declarations: [
    AppComponent,
    FrameworkTableComponent,
    VoteFormComponent,
    ResultsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    MatSortModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
