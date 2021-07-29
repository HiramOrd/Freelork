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
  @Input() role;
  changePassword = false;
  public userEntity: FormGroup;

  constructor(private formBuilder: FormBuilder, public router: Router) {
    this.userEntity = this.formBuilder.group({
      role: new FormControl(null, [Validators.required]),
      fullName: new FormControl(null, [Validators.required, Validators.minLength(8)]),
      email: new FormControl(null, [Validators.required, Validators.pattern(/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/)]),
      password: new FormControl(null, [Validators.required, Validators.minLength(8)]),
      confirmPassword: new FormControl(null, [Validators.required]),
    }, {
      validator: this.MustMatch('password', 'confirmPassword')
    });
  }

  ngOnInit(): void {
    this.changePasswordValidators();
    this.userEntity.get('role').setValue(this.role);
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
    return this.userEntity;
  }

  changePasswordValidators() {
    if ((this.changePassword === false && this.edit === true)) {
      this.userEntity.get('password').clearValidators();
      this.userEntity.get('confirmPassword').clearValidators();

      this.userEntity.get('password').updateValueAndValidity();
      this.userEntity.get('confirmPassword').updateValueAndValidity();

      this.userEntity.clearValidators();
      this.userEntity.updateValueAndValidity();
      this.userEntity.get('password').setValue(null);
      this.userEntity.get('confirmPassword').setValue(null);
    } else {
      this.userEntity.get('password').setValue(null);
      this.userEntity.get('confirmPassword').setValue(null);

      this.userEntity.get('password').setValidators([Validators.required, Validators.minLength(8)]);
      this.userEntity.get('confirmPassword').setValidators([Validators.required]);

      this.userEntity.get('password').updateValueAndValidity();
      this.userEntity.get('confirmPassword').updateValueAndValidity();

      this.userEntity.setValidators([this.MustMatch('password', 'confirmPassword')]);
      this.userEntity.updateValueAndValidity();
    }
  }

}
