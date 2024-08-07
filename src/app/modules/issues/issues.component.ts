import { Component } from '@angular/core';

@Component({
  selector: 'app-issues',
  templateUrl: './issues.component.html',
  styleUrls: ['./issues.component.css']
})
export class IssuesComponent {
  newIssue = {
    title: '',
    description: '',
    status: ''
  };

  issues: Array<{ title: string, description: string, status: string }> = [];

  addIssue(): void {
    this.issues.push({ ...this.newIssue });
    this.newIssue = {
      title: '',
      description: '',
      status: ''
    };
  }
}
