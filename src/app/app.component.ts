import { Component } from '@angular/core';
import { ApiService } from './api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  dateTimeObj;
  date: string;
  year: string;
  test: Date;

  constructor(private service: ApiService) {}

  ngOnInit() {
    this.getDateTime();
  }

  getDateTime() {
    this.service.getDateTimeAPI().subscribe(
      res => {
        this.dateTimeObj = res;
        console.log(this.dateTimeObj);
        this.date = this.dateTimeObj.date;
        this.year = this.dateTimeObj.time;
      }
    );
  }


}
