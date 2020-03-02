import { Location } from './location';

export class PremiumEventModel {
    name: string;
    date: string;
    time: string;
    location: Location;
    onlineUrl: string;

    constructor(name:string, date:string, time:string, location:Location, onlineUrl: string) {
        this.name = name;
        this.date = date;
        this.time = time;
        this.location = location;
        this.onlineUrl = onlineUrl;
    }
}