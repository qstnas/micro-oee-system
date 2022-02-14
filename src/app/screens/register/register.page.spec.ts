import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { Router } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { AppRoutingModule } from 'src/app/app-routing.module';

import { RegisterPage } from './register.page';

describe('RegisterPage', () => {
    let component: RegisterPage;
    let fixture: ComponentFixture<RegisterPage>;
    let router: Router;

    beforeEach(waitForAsync(() => {
        TestBed.configureTestingModule({
            declarations: [ RegisterPage ],
            imports: [
                IonicModule.forRoot(),
                AppRoutingModule
            ]
        }).compileComponents();

        fixture = TestBed.createComponent(RegisterPage);
        router = TestBed.get(Router);

        component = fixture.componentInstance;
    }));

    it('should go to login page on sign in', () => {
        spyOn(router, 'navigate');

        component.signIn();

        expect(router.navigate).toHaveBeenCalledWith(['login']);
    })


})