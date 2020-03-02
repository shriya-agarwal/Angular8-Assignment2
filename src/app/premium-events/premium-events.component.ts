import { Component, OnInit } from '@angular/core';
import { eventList } from '../ListOfPremiumEvents'
import { PremiumEventModel } from '../Models/premiumEventModel';

@Component({
  selector: 'app-premium-events',
  templateUrl: './premium-events.component.html',
  styleUrls: ['./premium-events.component.css']
})
export class PremiumEventsComponent implements OnInit {

  eventList: Array<PremiumEventModel> = eventList;

  constructor() { }

  ngOnInit() {
  }

}
