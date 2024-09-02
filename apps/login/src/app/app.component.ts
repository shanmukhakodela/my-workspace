import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIcon, MatIconModule } from '@angular/material/icon';
import { MatBadgeModule } from '@angular/material/badge';
import { ProductsService } from 'libs/products/src/lib/products.service';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';


@Component({
  standalone: true,
  imports: [RouterModule, CommonModule, MatFormFieldModule, MatInputModule, ReactiveFormsModule,
    MatToolbarModule, MatIcon, MatIconModule, MatBadgeModule],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  title = 'login';
  isLoggedIn = false;
  productsAdded = 0;
  searchForm!: FormGroup;
  constructor(private router: Router, private service: ProductsService) { }
  ngOnInit(): void {
    this.searchForm = new FormGroup({
      search: new FormControl()
    })
    if (localStorage.getItem('isLoggedIn')) {
      this.service.setIsLogged(true);
    }
    this.service.getIslogged().subscribe((res) => {
      this.isLoggedIn = res;
      if (this.isLoggedIn) {
        this.service.getCounter().subscribe((res) => {
          this.productsAdded = res;
        })
      }
    })

  }
  logout() {
    localStorage.removeItem('isLoggedIn');
    this.service.setIsLogged(false);
    this.service.setCounter(0);
    this.router.navigate(['/'])
  }
  gotoCart() {
    this.router.navigate(['/cart'])
  }

  submit() {
    console.log('this.', this.searchForm.value);
    
  }
}
