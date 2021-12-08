import {Pipe, PipeTransform} from '@angular/core';
@Pipe ({
name : 'convertDevise'
})

export class ConvertDevise implements PipeTransform {
    constructor(){}
    
    transform(val : number,depart : String, arrivee : String) {
        let devises = new Map<string, number>();
        devises.set("FCFA", 1);
        devises.set("Euro", 655.957);
        devises.set("Dollar_us", 575.500);
        devises.set("Yen_japonais", 5.075);
        devises.set("Livre_sterling", 768.250);
        devises.set("Franc_suisse", 626.750);
        devises.set("Dollar_canadien", 450.500);
        devises.set("Yuan_chinois", 90.000);
        devises.set("Dirham_UAE", 156.250);

        if(devises.has(String(depart)))
            if(devises.has(String(arrivee)))
                return Number(devises.get(String(depart)))/Number(devises.get(String(arrivee)))*val;   
        return val;
    }
}