import { Component, inject } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { RegisterService } from '../../../../services/register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  host: {
    class:'w-full'
  }
})
export class RegisterComponent {
  protected loading: boolean = false;
  protected hasSubmitted: boolean = false;

  private formBuilder = inject(FormBuilder);
  private registerService = inject(RegisterService);

  protected userForm = this.formBuilder.group({
    name: ['', [Validators.required, Validators.maxLength(255)]],
    lastName: ['', [Validators.required, Validators.maxLength(255)]],
    age: ['', [Validators.required, Validators.maxLength(255)]],
    gender: ['', [Validators.required, Validators.maxLength(255)]],
    email: ['', [Validators.required, Validators.maxLength(255)]],
    password: ['', [Validators.required, Validators.maxLength(255)]]
  });

  getFormControl(field: 'name' | 'lastName' | 'email' |  'password' | 'age' | 'gender') {
    return this.userForm.controls[field];
  }

  get name() { return this.getFormControl('name'); }
  get lastName() { return this.getFormControl('lastName'); }
  get email() { return this.getFormControl('email'); }
  get password() { return this.getFormControl('password'); }
  get age() { return this.getFormControl('age'); }
  get gender() { return this.getFormControl('gender'); }

  async submitForm() {
    this.hasSubmitted = true;

    if (this.userForm.invalid) throw '';

    this.loading = true;

    try {
      const userForm = this.mountFormValues();

      await this.registerService.register(userForm);
    } catch (error) {
      window.alert('Dados inválidos');
    } finally {
      this.loading = false;
    }
  }

  mountFormValues() {
    return {
      name: this.name.value!,
      lastName: this.lastName.value!,
      email: this.email.value!,
      password: this.password.value!,
      age: this.age.value!,
      gender: this.gender.value!
    };
  }
}
