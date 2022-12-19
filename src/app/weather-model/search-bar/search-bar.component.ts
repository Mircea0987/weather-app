import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css'],
})
export class SearchBarComponent implements OnInit {
  constructor() {}

  @Output() newEvent = new EventEmitter();

  name: any = 'San Francisco';
  test() {
    this.newEvent.emit(this.name);
    this.name = '';
  }

  ngOnInit(): void {
    this.test();
  }
}
