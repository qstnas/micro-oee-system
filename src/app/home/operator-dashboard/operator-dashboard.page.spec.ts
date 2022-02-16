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

  it('ahould go to performance sheet page on arrow1', () => {
    spyOn(router, 'navigate');

    component.arrow1();

    expect(router.navigate).toHaveBeenCalledWith(['performance-sheet']);
  });

  it('ahould go to operator sheet page on arrow2', () => {
    spyOn(router, 'navigate');

    component.arrow2();

    expect(router.navigate).toHaveBeenCalledWith(['operator-sheet']);
  });

  it('ahould go to downtime sheet page on arrow3', () => {
    spyOn(router, 'navigate');

    component.arrow3();

    expect(router.navigate).toHaveBeenCalledWith(['downtime-sheet']);
  });

  it('ahould go to quality sheet page on arrow4', () => {
    spyOn(router, 'navigate');

    component.arrow4();

    expect(router.navigate).toHaveBeenCalledWith(['quality-sheet']);
  });
});
