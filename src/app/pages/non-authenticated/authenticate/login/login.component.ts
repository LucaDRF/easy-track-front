import { Component, inject } from '@angular/core';
import { LoginService } from '../../../../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  host: {
    class:'w-full'
  }
})
export class LoginComponent {
  protected email: string = '';
  protected emailError: boolean = false;
  protected password: string = '';
  protected passwordError: boolean = false;
  protected loading: boolean = false;

  private loginService = inject(LoginService);

  async loginUser() {
    this.validate();

    this.loading = true;

    try {
      await this.loginService.loginUser(this.email, this.password);
    } catch (error) {
      window.alert('LOGIN INVALIDO');
    } finally {
      this.loading = false;
    }
  }

  validate() {
    if (!this.email) {
      this.emailError = true;
    } else {
      this.emailError = false;
    }

    if (!this.password) {
      this.passwordError = true;
    } else {
      this.passwordError = false;
    }

    if (!this.email || !this.password) {
      throw '';
    }
  }
}
