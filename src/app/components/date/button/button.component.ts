import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { ApiService } from '../../../api.service';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {

  @Output() fecha = new EventEmitter<object>();

  constructor(private service: ApiService) { }

  ngOnInit() {}

  getDateTime() {
    this.service.getDateTimeAPI().subscribe(
      res => {
        this.fecha.emit(res);
      }
    );
  }

}
