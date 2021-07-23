import {Component, Input, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, ValidatorFn, Validators} from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-register-form',
  templateUrl: './all-users.component.html',
  styleUrls: ['./all-users.component.css']
})
export class AllUsersComponent implements OnInit {
  @Input() edit = false;
  changePassword = false;
  public registerForm: FormGroup;

  constructor(private formBuilder: FormBuilder, public router: Router) {
    this.registerForm = this.formBuilder.group({
      fullName: new FormControl(null, [Validators.required, Validators.minLength(12)]),
      email: new FormControl(null, [Validators.required, Validators.pattern(/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/)]),
      password: new FormControl(null, [Validators.required, Validators.minLength(8)]),
      confirmPassword: new FormControl(null, [Validators.required]),
    }, {
      validator: this.MustMatch('password', 'confirmPassword')
    });
  }

  ngOnInit(): void {
    this.changePasswordValidators();
  }

  MustMatch(controlName: string, matchingControlName: string): ValidatorFn {
    const response = (formGroup: FormGroup) => {
      const control = formGroup.controls[controlName];
      const matchingControl = formGroup.controls[matchingControlName];
      if (matchingControl.errors && !matchingControl.errors.mustMatch) {
        return;
      }
      if (control.value !== matchingControl.value) {
        matchingControl.setErrors({mustMatch: true});
      } else {
        matchingControl.setErrors(null);
      }
    };
    return response as ValidatorFn;
  }

  public createFormGroup(): FormGroup {
    return this.registerForm;
  }

  changePasswordValidators() {
    if ((this.changePassword === false && this.edit === true)) {
      this.registerForm.get('password').clearValidators();
      this.registerForm.get('confirmPassword').clearValidators();

      this.registerForm.get('password').updateValueAndValidity();
      this.registerForm.get('confirmPassword').updateValueAndValidity();

      this.registerForm.clearValidators();
      this.registerForm.updateValueAndValidity();
      this.registerForm.get('password').setValue(null);
      this.registerForm.get('confirmPassword').setValue(null);
    } else {
      this.registerForm.get('password').setValue(null);
      this.registerForm.get('confirmPassword').setValue(null);

      this.registerForm.get('password').setValidators([Validators.required, Validators.minLength(8)]);
      this.registerForm.get('confirmPassword').setValidators([Validators.required]);

      this.registerForm.get('password').updateValueAndValidity();
      this.registerForm.get('confirmPassword').updateValueAndValidity();

      this.registerForm.setValidators([this.MustMatch('password', 'confirmPassword')]);
      this.registerForm.updateValueAndValidity();
    }
  }

}
