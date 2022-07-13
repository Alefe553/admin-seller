import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HeaderComponent } from '../views/components/template/header/header.component';
import { HeaderDate } from '../models/header-data.model';

@Injectable({
  providedIn: 'any'
})
export class HeaderService {

  private _headerData = new BehaviorSubject<HeaderDate>({
    title: '',
    icon: '',
    routerUrl: ''
  });

  constructor() { }

  get headerData(): HeaderDate {
    return this._headerData.value;
  }

  set headerData(headerData: HeaderDate) {
    this._headerData.next(headerData);
  }
}
