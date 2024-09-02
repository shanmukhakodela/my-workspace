import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormGroup, FormControl, Validators,ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ProductsService } from 'libs/products/src/lib/products.service';
@Component({
  selector: 'app-signin',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule,MatInputModule,MatCardModule,MatFormFieldModule],
  templateUrl: './signin.component.html',
  styleUrl: './signin.component.scss',
})
export class SigninComponent {
  invalid = false;
  constructor(private router: Router, private service: ProductsService) {

  }
  loginForm = new FormGroup({
    username: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required])
  });

  login() {
      if(this.loginForm.valid && this.loginForm.value.username === 'demo' && this.loginForm.value.password === 'demo') {
        localStorage.setItem('isLoggedIn', "true");
        this.service.setIsLogged(true);
        this.router.navigate(['/dashboard'])
      } else {
        this.invalid = true;
      }
  }
}
