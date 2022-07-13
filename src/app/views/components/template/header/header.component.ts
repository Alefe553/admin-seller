import { Component, OnInit } from '@angular/core';
import { HeaderService } from 'src/app/services/header.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private serice: HeaderService) { }

  ngOnInit(): void {
  }

  get title(): string{
    return this.serice.headerData.title;
  }

  get icon(): string{
    return this.serice.headerData.icon;
  }

  get routerUrl(): string{
    return this.serice.headerData.routerUrl;
  }

}
