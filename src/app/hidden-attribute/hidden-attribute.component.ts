import { Component, OnInit } from '@angular/core';
import { eventList } from '../ListOfEventsHiddenProperty';
import { HiddenEventModel } from '../Models/hiddenEventModel';

@Component({
  selector: 'app-hidden-attribute',
  templateUrl: './hidden-attribute.component.html',
  styleUrls: ['./hidden-attribute.component.css']
})
export class HiddenAttributeComponent implements OnInit {

  eventList: Array<HiddenEventModel> = eventList;

  constructor() { }

  ngOnInit() {
  }

}
