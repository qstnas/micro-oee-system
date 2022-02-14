import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { Router } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { AppRoutingModule } from 'src/app/app-routing.module';

import { OperatorPage } from './operator.page';

describe('OperatorPage', () => {
  let component: OperatorPage;
  let fixture: ComponentFixture<OperatorPage>;
  let router: Router;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ OperatorPage ],
      imports: [
        IonicModule.forRoot(),
        AppRoutingModule
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(OperatorPage);
    router = TestBed.get(Router);

    component = fixture.componentInstance;
  }));

  it('should go to performance sheet page on arrow1', () => {
    spyOn(router, 'navigate');

    component.arrow1();

    expect(router.navigate).toHaveBeenCalledWith(['operator-sheet']);
  })


  it('should go to performance sheet page on arrow2', () => {
    spyOn(router, 'navigate');

    component.arrow2();

    expect(router.navigate).toHaveBeenCalledWith(['performance-sheet']);
  })

  it('should go to downtime sheet page on arrow3', () => {
    spyOn(router, 'navigate');

    component.arrow3();

    expect(router.navigate).toHaveBeenCalledWith(['downtime-sheet']);
  })

  it('should go to quality sheet page on arrow4', () => {
    spyOn(router, 'navigate');

    component.arrow4();

    expect(router.navigate).toHaveBeenCalledWith(['quality-sheet']);
  })
});