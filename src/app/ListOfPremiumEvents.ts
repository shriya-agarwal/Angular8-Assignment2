import { Location } from './Models/location';
import { PremiumEventModel } from './Models/premiumEventModel';

    export var eventList: Array<PremiumEventModel> = [
        new PremiumEventModel("Event 1", "1/03/20", "20:00", new Location("Manikonda", "Telangana", "Hyderabad", 500089, "India"), "http:google.com"),
        new PremiumEventModel("Event 2", "2/03/20", "10:00", null, "http:google.com"),
        new PremiumEventModel("Event 3", "3/03/20", "21:00", new Location("Lanco Hills", "Telangana", "Hyderabad", 500089, "India"),null),
        new PremiumEventModel("Event 4", "1/03/20", "20:00", null, null)
    ];
