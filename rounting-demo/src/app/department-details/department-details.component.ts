import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-department-details',
  template: `
    <p>
      You selected {{departmentId}} no department.
    </p>
  `,
  styles: []
})
export class DepartmentDetailsComponent implements OnInit {

  public departmentId;
  constructor( private route:ActivatedRoute) { }

  ngOnInit(): void {
    let id = parseInt(this.route.snapshot.paramMap.get('id')); 
    this.departmentId=id;
  }

}
