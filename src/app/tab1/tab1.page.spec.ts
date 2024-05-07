import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { RouterTestingModule } from '@angular/router/testing';
import { FormsModule } from '@angular/forms';
import { Tab1Page } from './tab1.page';

describe('Tab1Page', () => {
  let component: Tab1Page;
  let fixture: ComponentFixture<Tab1Page>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [Tab1Page],
      imports: [IonicModule.forRoot(), RouterTestingModule, FormsModule]
    }).compileComponents();

    fixture = TestBed.createComponent(Tab1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should authenticate user with correct credentials', () => {
    component.username = 'user';
    component.password = 'password';
    spyOn(component['router'], 'navigate').and.callFake(() => {});
    component.authenticate();
    expect(component['router'].navigate).toHaveBeenCalledWith(['/home']);
  });

  it('should not authenticate user with incorrect credentials', () => {
    component.username = 'invaliduser';
    component.password = 'invalidpassword';
    component.authenticate();
    expect(component.errorMessage).toEqual('Invalid username or password');
  });
});
