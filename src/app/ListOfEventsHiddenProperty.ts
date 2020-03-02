import { Location } from './Models/location';
import { HiddenEventModel } from './Models/hiddenEventModel';

    export var eventList: Array<HiddenEventModel> = [
        new HiddenEventModel("Event 1", "1/03/20", "20:00", new Location("Manikonda", "Telangana", "Hyderabad", 500089, "India"), "http:google.com", true),
        new HiddenEventModel("Event 2", "2/03/20", "10:00", null, "http:google.com", true),
        new HiddenEventModel("Event 3", "3/03/20", "21:00", new Location("Lanco Hills", "Telangana", "Hyderabad", 500089, "India"), null, true),
        new HiddenEventModel("Event 4", "1/03/20", "20:00", null, null, true)
    ];
