import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { OperatorDashboardPage } from './operator-dashboard.page';

describe('OperatorDashboardPage', () => {
  let component: OperatorDashboardPage;
  let fixture: ComponentFixture<OperatorDashboardPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ OperatorDashboardPage ],
      imports: [
        IonicModule.forRoot()
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(OperatorDashboardPage);
    component = fixture.componentInstance;
  }));

});
