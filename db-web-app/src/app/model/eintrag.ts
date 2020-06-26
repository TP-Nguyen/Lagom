// import { not } from '@angular/compiler/src/output/output_ast';

export class Eintrag{
    // ZielID : number;
    // WorkspaceID  : number;
    Art : String;
    EintragID  : number;
    Datum : Date;
    Uhrzeit: String;
    Titel : String;
    Untertitel : String;
    Text : String;
    Notiz : String;
    Anmerkung : String;

    constructor(datum: Date, uhrzeit:string, Titel: string, untertitel: string, text: string, notiz: string, anmerkung: string) {
        this.Datum = datum;
        this.Uhrzeit = uhrzeit;
        this.Titel = Titel;
        this.Untertitel = untertitel;
        this.Text = text;
        this.Notiz = notiz;
        this.Anmerkung = anmerkung;   
    }
}