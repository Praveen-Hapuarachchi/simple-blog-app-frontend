import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';  // Import FormsModule
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  loginData = { email: '', password: '' };

  onSubmit() {
    console.log('Logging in with:', this.loginData);
    // You can add login logic here, like calling an authentication service
  }
}