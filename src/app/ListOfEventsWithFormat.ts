import { Location } from './Models/location';
import { EventModelWithFormat } from './Models/eventModelWithFormat';

    export var eventList: Array<EventModelWithFormat> = [
        new EventModelWithFormat("Event 1", "1/03/20", "20:00", new Location("Manikonda", "Telangana", "Hyderabad", 500089, "India"), "http:google.com", true, null),
        new EventModelWithFormat("Event 2", "2/03/20", "10:00", null, "http:google.com", true, "Online"),
        new EventModelWithFormat("Event 3", "3/03/20", "21:00", new Location("Lanco Hills", "Telangana", "Hyderabad", 500089, "India"), null, true, "InPerson"),
        new EventModelWithFormat("Event 4", "1/03/20", "20:00", null, null, true, null)
    ];
