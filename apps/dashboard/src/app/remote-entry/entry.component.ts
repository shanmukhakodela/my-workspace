import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NxWelcomeComponent } from './nx-welcome.component';
import { ProductsComponent } from '@my-workspace/products';


@Component({
  standalone: true,
  imports: [CommonModule, NxWelcomeComponent,ProductsComponent],
  selector: 'app-dashboard-entry',
  template: `<lib-products></lib-products>`,
})
export class RemoteEntryComponent {}
