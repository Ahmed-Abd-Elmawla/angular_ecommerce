import { Component } from '@angular/core';
import {
  AbstractControl,
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  ValidationErrors,
  ValidatorFn,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  registerForm: FormGroup;
  // control = new FormControl('', Validators.required);
  constructor() {
    this.registerForm = new FormGroup({
      name: new FormControl(null, [
        Validators.required,
        Validators.minLength(10),
      ]),
      email: new FormControl(null, [Validators.required, Validators.email]),
      username: new FormControl(null, [
        Validators.required,
        Validators.pattern('^[^\\s]*$'),
        Validators.maxLength(10),
      ]),
      password: new FormControl(null, [
        Validators.required,
        Validators.minLength(8),
        Validators.pattern(/^(?=.*[A-Z])(?=.*[a-z])(?=.*d).*$/),
      ]),
      passmatch: new FormControl(null, [
        Validators.required,
        Validators.minLength(8),
        // this.check('password','passmatch'),
      ]),
    });
  }

  // check(val:any,val2:any):ValidatorFn {
  //   console.log(val.value);
  //   console.log(val2.value);
  //   return val2.value === val.value? null : val.value;
  // }

  registerFormFn() {
    console.log(this.registerForm);
    let msg = document.getElementById('alert');
    msg?.classList.remove('d-none');
    console.log(this.registerForm.controls['password'].value);
    console.log(this.registerForm.controls['passmatch'].value);
  }
}
