import { Component, OnInit } from '@angular/core';
import {HomeService} from './home.service';
import {ApiData} from '../interfaces/apidata.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public data: ApiData;
  constructor(private homeService: HomeService) { }

  ngOnInit() {
    
  }

  loadData(): void {
    this.homeService.getHomeData().subscribe((data) => {
      this.data = data;
    });
  }
}
