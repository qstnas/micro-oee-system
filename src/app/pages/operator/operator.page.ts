import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-operator',
  templateUrl: './operator.page.html',
  styleUrls: ['./operator.page.scss'],
})
export class OperatorPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  arrow1() {
    this.router.navigate(['operator-sheet']);
  }

  arrow2() {
    this.router.navigate(['performance-sheet']);
  }

  arrow3() {
    this.router.navigate(['downtime-sheet']);
  }

  arrow4() {
    this.router.navigate(['quality-sheet']);
  }

}