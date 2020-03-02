import { EventsModel } from './Models/eventsModel';
import { Location } from './Models/location';

    export var eventList: Array<EventsModel> = [
        new EventsModel("event1", "1/03/20", "20:00", new Location("Manikonda", "Telangana", "Hyderabad", 500089, "India")),
        new EventsModel("event2", "2/03/20", "20:00", new Location("Gachibowli", "Telangana", "Hyderabad", 500089, "India")),
        new EventsModel("event3", "3/03/20", "21:00", new Location("Lanco Hills", "Telangana", "Hyderabad", 500089, "India")),
    ];
