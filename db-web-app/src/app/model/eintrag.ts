import { not } from '@angular/compiler/src/output/output_ast';

export class Eintrag{
    // ZielID : number;
    // WorkspaceID  : number;
    EintragID  : number;
    Datum : String;
    Titel : String;
    Untertitel : String;
    Text : String;
    Notiz : String;
    Anmerkung : String;

    constructor(datum: string, titel: string, untertitel: string, text: string, notiz: string, anmerkung: string) {
        this.Datum = datum;
        this.Titel = titel;
        this.Untertitel = untertitel;
        this.Text = text;
        this.Notiz = notiz;
        this.Anmerkung = anmerkung;   
    }
}