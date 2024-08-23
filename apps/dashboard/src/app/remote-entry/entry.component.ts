import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from '@my-workspace/products';


@Component({
  standalone: true,
  imports: [CommonModule,ProductsComponent],
  selector: 'app-dashboard-entry',
  template: `<lib-products></lib-products>`,
})
export class RemoteEntryComponent {}
