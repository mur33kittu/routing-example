import { Component, OnInit } from '@angular/core';
import { DepartmentModal } from '../modals/departments.modal';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-department-list',
  template: `
    <ul class="list-group" *ngFor="let department of departments">
      <li [class.selected]="isSelected(department)" (click)="onSelect(department)" class="list-group-item d-flex justify-content-between align-items-center">
        {{department.name}}
        <span class="badge badge-primary badge-pill">{{department.id}}</span>
      </li> 
    </ul>
  `,
  styles: [
    `li.selected{
      background-color:lightblue;
    }`
  ]
})
export class DepartmentListComponent implements OnInit {
  private departments: DepartmentModal[];
  public selectedId;
  constructor(private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.departments = [
      { id: 1, name: "Angular" },
      { id: 2, name: "Nodejs" },
      { id: 3, name: "React" },
      { id: 4, name: "MongoDb" },
      { id: 5, name: "FireBase" },
    ];
    this.activatedRoute.paramMap.subscribe((param: ParamMap) => {
      this.selectedId = parseInt(param.get("id"));
    });
  }
  onSelect(department) {
    // this.router.navigate(["/departments", department.id]);
    this.router.navigate([department.id], { relativeTo: this.activatedRoute });
  }

  isSelected(department) {
    return department.id === this.selectedId;
  }

}
