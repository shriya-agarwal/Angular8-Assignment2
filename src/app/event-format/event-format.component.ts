import { Component, OnInit } from '@angular/core';
import { EventModelWithFormat } from '../Models/eventModelWithFormat';
import { eventList } from '../ListOfEventsWithFormat';

@Component({
  selector: 'app-event-format',
  templateUrl: './event-format.component.html',
  styleUrls: ['./event-format.component.css']
})
export class EventFormatComponent implements OnInit {

  eventList: Array<EventModelWithFormat> = eventList;

  constructor() { }

  ngOnInit() {
  }

}
