import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IssuesComponent } from './issues.component';
import { IssueRoutingModule } from './issues-routing.module';


@NgModule({
  declarations: [
    IssuesComponent
  ],
  imports: [
    CommonModule,
    IssueRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class IssuesModule { }
