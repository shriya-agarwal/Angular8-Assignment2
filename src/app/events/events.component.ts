import { Component, OnInit } from '@angular/core';
import { EventsModel } from '../Models/eventsModel';
// import { MatTableDataSource } from '@angular/material';
import { eventList } from  '../ListOfEvents'

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {

  // columnsToDisplay: string[] = ['name', 'date', 'time', 'address', 'state', 'city', 'pin', 'country'];
  // dataSource = new MatTableDataSource<EventsModel>(eventList);

  eventList : Array<EventsModel> = eventList;

  constructor() { }

  ngOnInit() {
  }

}
