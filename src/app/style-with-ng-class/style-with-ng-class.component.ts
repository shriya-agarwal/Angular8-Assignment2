import { Component, OnInit } from '@angular/core';
import { EventModelWithFormat } from '../Models/eventModelWithFormat';
import { eventList } from '../ListOfEventsWithFormat';

@Component({
  selector: 'app-style-with-ng-class',
  templateUrl: './style-with-ng-class.component.html',
  styleUrls: ['./style-with-ng-class.component.css']
})
export class StyleWithNgClassComponent implements OnInit {

  eventList: Array<EventModelWithFormat> = eventList;
  
  constructor() { }

  ngOnInit() {
  }

}
