import { Location } from './location';

export class EventModelWithFormat {
    name: string;
    date: string;
    time: string;
    location: Location;
    onlineUrl: string;
    hidden: boolean;
    format: string;

    constructor(name:string, date:string, time:string, location:Location, 
        onlineUrl: string, hidden:boolean, format:string) {
        this.name = name;
        this.date = date;
        this.time = time;
        this.location = location;
        this.onlineUrl = onlineUrl;
        this.hidden = hidden;
        this.format = format;
    }
}