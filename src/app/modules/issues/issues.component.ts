import { Component, OnInit } from '@angular/core';
import { Issue } from '../../issue.model';


@Component({
  selector: 'app-issues',
  templateUrl: './issues.component.html',
  styleUrls: ['./issues.component.css']
})
export class IssuesComponent implements OnInit {
  issues: Issue[] = [];

  ngOnInit(): void {
    const issuesFromStorage = localStorage.getItem('issues');
    if (issuesFromStorage) {
      this.issues = JSON.parse(issuesFromStorage) as Issue[];
    }
  }

  addIssue(newIssue: Issue): void {
    this.issues.push(newIssue);
    localStorage.setItem('issues', JSON.stringify(this.issues));
  }
}
