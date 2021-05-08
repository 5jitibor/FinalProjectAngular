export class CovidBasicData {

    confirmed: number;
    recovered: number;
    critical: number;
    deaths: number;
    active: number;
    lastChange: Date;
    lastUpdate: Date;
  
    constructor(obj?:any){
        this.confirmed = obj && obj['confirmed'] ? obj['confirmed'] : null;
        this.recovered = obj && obj['recovered'] ? obj['recovered'] : null;
        this.critical = obj && obj['critical'] ? obj['critical'] : null;
        this.deaths = obj && obj['deaths'] ? obj['deaths'] : null;
        this.active = obj && obj['active'] ? obj['active'] : null;
        this.lastChange = obj && obj['lastChange'] ? obj['lastChange'] : null;
        this.lastUpdate = obj && obj['lastUpdate'] ? obj['lastUpdate'] : null;
    }
  
  }