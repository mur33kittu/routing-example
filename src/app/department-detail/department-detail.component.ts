import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';

@Component({
  selector: 'app-department-detail',
  template: `
    <h4>you have selected department with id : {{departmentId}}</h4><br/>

    <p>
      <a (click)="showOverview()">OverView</a>
      <a (click)="showContact()">Contact</a>
    </p>
    <router-outlet></router-outlet>
    <a (click)="goPrevious()" class="btn btn-primary">Previous</a><br/>
    <a  (click)="goNext()" class="btn btn-primary">Next</a><br/><br/>
    <a class="btn btn-primary" (click)="goBack()">Back</a><br/>
  `,
  styles: []
})
export class DepartmentDetailComponent implements OnInit {
  private departmentId: number;
  constructor(private activatedRoute: ActivatedRoute, private router: Router) {

  }

  ngOnInit() {
    // this.departmentId = parseInt(this.activatedRoute.snapshot.paramMap.get("id"));
    this.activatedRoute.paramMap.subscribe((params: ParamMap) => {
      this.departmentId = parseInt(params.get("id"));
    });
  }
  goPrevious() {
    let previousId = this.departmentId - 1;
    // this.router.navigate(['/departments', previousId]);
    this.router.navigate([{ id: previousId }], { relativeTo: this.activatedRoute });
  }
  goNext() {
    let nextId = this.departmentId + 1;
    // this.router.navigate(['/departments', nextId]);
    this.router.navigate([{ id: nextId }], { relativeTo: this.activatedRoute });
  }
  goBack() {
    let selectedId = this.departmentId ? this.departmentId : null;
    // this.router.navigate(["/departments", { id: selectedId }]);
    this.router.navigate(['../', { id: selectedId }], { relativeTo: this.activatedRoute });
  }
  showOverview() {
    this.router.navigate(['overview'], { relativeTo: this.activatedRoute });
  }
  showContact() {
    this.router.navigate(['contact'], { relativeTo: this.activatedRoute });
  }

}
