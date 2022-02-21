import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { Router } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { AppRoutingModule } from 'src/app/app-routing.module';

import { OperatorDashboardPage } from './operator-dashboard.page';

describe('OperatorDashboardPage', () => {
  let component: OperatorDashboardPage;
  let fixture: ComponentFixture<OperatorDashboardPage>;
  let router: Router;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ OperatorDashboardPage ],
      imports: [
        IonicModule.forRoot(),
        AppRoutingModule
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(OperatorDashboardPage);
    router = TestBed.get(Router);

    component = fixture.componentInstance;
  }));

  it('ahould go to operator sheet page on arrow1', () => {
    spyOn(router, 'navigate');

    component.arrow1();

    expect(router.navigate).toHaveBeenCalledWith(['operator-sheet']);
  });


});
