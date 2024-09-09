import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SigninComponent } from './signin.component';

describe('SigninComponent', () => {
  let component: SigninComponent;
  let fixture: ComponentFixture<SigninComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SigninComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SigninComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('TEST a form group element count', () => {
    const formElements = fixture.debugElement.nativeElement.querySelector('#loginForm');
    const inputElements = formElements.querySelectorAll('input');
    expect(inputElements.length).toEqual(2);
  });

  it('CHECK initial form values for login form group', () => {
    const loginFormGroup = component.loginForm;
    const loginFormValues = {
      username: '',
      password:''
    }
    expect(loginFormGroup.value).toEqual(loginFormValues);
  })

  it('check username value before entering some value and validation', () => {
    const loginFormUserElement: HTMLInputElement = fixture.debugElement.nativeElement.
                                                        querySelector('#loginForm').querySelectorAll('input')[0];
    const userNameValueFromGroup = component.loginForm.get('username');
    expect(loginFormUserElement.value).toEqual(userNameValueFromGroup?.value);
    expect(userNameValueFromGroup?.errors).not.toBeNull();
    expect(userNameValueFromGroup?.errors?.['required']).toBeTruthy();
  });

  it('check username value after entering some value and validation', () => {
    const loginFormUserElement: HTMLInputElement = fixture.debugElement.nativeElement.
                                                        querySelector('#loginForm').querySelectorAll('input')[0];
    loginFormUserElement.value="demo";
    loginFormUserElement.dispatchEvent(new Event('input'));
    fixture.detectChanges();
    fixture.whenStable().then(() => {
      const userNameValueFromGroup = component.loginForm.get('username');
      expect(loginFormUserElement.value).toEqual(userNameValueFromGroup?.value);
      expect(userNameValueFromGroup?.errors).toBeNull();
    })
  });

  it('check login form is valid when validators are fullfilled', () => {
    const loginFormUserElement: HTMLInputElement = fixture.debugElement.nativeElement.
                                                        querySelector('#loginForm').querySelectorAll('input')[0];
    const loginFormPassElement: HTMLInputElement = fixture.debugElement.nativeElement.
                                                        querySelector('#loginForm').querySelectorAll('input')[1];
    loginFormUserElement.value = "demo";
    loginFormPassElement.value = "demo";
    loginFormUserElement.dispatchEvent(new Event('input'));
    loginFormPassElement.dispatchEvent(new Event('input'));
    const isLoginFormValid = component.loginForm.valid;
    fixture.whenStable().then(() => {
      expect(isLoginFormValid).toBeTruthy();
    })
  });
});
