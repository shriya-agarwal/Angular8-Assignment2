import { Location } from './location';

export class HiddenEventModel {
    name: string;
    date: string;
    time: string;
    location: Location;
    onlineUrl: string;
    hidden: boolean;

    constructor(name:string, date:string, time:string, location:Location, onlineUrl: string, hidden:boolean) {
        this.name = name;
        this.date = date;
        this.time = time;
        this.location = location;
        this.onlineUrl = onlineUrl;
        this.hidden = hidden;
    }
}