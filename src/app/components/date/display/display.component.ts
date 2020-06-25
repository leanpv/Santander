import { Component, OnInit, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit, OnChanges  {

  @Input() fecha: any;
  time: string;
  date: string;

  constructor() { }

  ngOnInit() {}

  ngOnChanges(): void {
    if (this.fecha) {
      this.date = this.fecha.date;
      this.time = this.fecha.time;
    }
  }

}
