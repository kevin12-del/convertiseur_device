import {Pipe, PipeTransform} from '@angular/core';
@Pipe ({
name : 'convert'
})

export class ConvertPipe implements PipeTransform {
    constructor(){}
    
    transform(val : number,depart : String, arrivee : String) {
        let devises = new Map<string, number>();
        devises.set("FCFA", 1);
        devises.set("Euro", 655.957);
        devises.set("Dollar us", 575.500);
        devises.set("Yen japonais", 5.075);
        devises.set("Livre sterling", 768.250);
        devises.set("Franc suisse", 626.750);
        devises.set("Dollar canadien", 450.500);
        devises.set("Yuan chinois", 90.000);
        devises.set("Dirham UAE", 156.250);

        if(devises.has(String(depart)))
            if(devises.has(String(arrivee)))
                return Number(devises.get(String(depart)))/Number(devises.get(String(arrivee)))*val;   
        return val;
    }
}