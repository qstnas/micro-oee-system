import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-operator-dashboard',
  templateUrl: './operator-dashboard.page.html',
  styleUrls: ['./operator-dashboard.page.scss'],
})
export class OperatorDashboardPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  
  arrow1() {
    this.router.navigate(['performance-sheet']);
  }

  arrow2() {
    this.router.navigate(['operator-sheet']);
  }

  arrow3() {
    this.router.navigate(['downtime-sheet']);
  }

  arrow4() {
    this.router.navigate(['quality-sheet']);
  }

}

