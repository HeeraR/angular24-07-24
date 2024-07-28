import { Component } from '@angular/core';

interface Issue {
  title: string;
  description: string;
  status: string;
}

@Component({
  selector: 'app-issues',
  templateUrl: './issues.component.html',
  styleUrls: ['./issues.component.css']
})
export class IssuesComponent {
  issue: Issue = {
    title: '',
    description: '',
    status: 'open'
  };

  issues: Issue[] = [];

  addIssue() {
    if (this.issue.title && this.issue.description && this.issue.status) {
      this.issues.push({ ...this.issue });
      this.resetForm();
    } else {
      alert('Please fill in all fields.');
    }
  }

  resetForm() {
    this.issue = {
      title: '',
      description: '',
      status: 'open'
    };
  }
}
