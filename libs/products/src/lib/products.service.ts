import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  isLoggedIn = new BehaviorSubject<boolean>(false);
  counter = new BehaviorSubject<number>(0);
  constructor() {}
  setCounter(count?: number) {
    if(count === 0) {
      this.counter.next(0);
    } else {
      this.counter.next(this.counter.value + 1);
    }
  }
  getCounter() {
    return this.counter.asObservable();
  }

  setIsLogged(logg: boolean) {
    this.isLoggedIn.next(logg);
  }

  getIslogged() {
    return this.isLoggedIn.asObservable();
  }
}
