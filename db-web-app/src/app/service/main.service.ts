import { APIConfig } from '../APIconfig';
import { HttpClient , HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { Eintrag } from '../model/eintrag';
import { Ziel } from '../model/ziel';
import { Todo } from '../model/todo';
import { Erinnerung } from '../model/erinnerung';
import { Galerie } from '../model/galerie';
import { Motivation } from '../model/motivation';
import { Nutzer } from '../model/nutzer';
import { Tagebuch } from '../model/tagebuch';
import { Kalender } from '../model/kalender';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class MainService {
    constructor(private http: HttpClient) {}

    private readonly zielUrl = APIConfig.URL + ':' + APIConfig.PORT + '/ziel';
    private readonly todoUrl = APIConfig.URL + ':' + APIConfig.PORT + '/todo';
    private readonly erinnerungUrl = APIConfig.URL + ':' + APIConfig.PORT + '/erinnerung';
    private readonly galerieUrl = APIConfig.URL + ':' + APIConfig.PORT + '/galerie';
    private readonly motivationUrl = APIConfig.URL + ':' + APIConfig.PORT + '/motivation';
    private readonly nutzerUrl = APIConfig.URL + ':' + APIConfig.PORT + '/nutzer';
    private readonly tagebuchUrl = APIConfig.URL + ':' + APIConfig.PORT + '/tagebuch';
    private readonly kalenderUrl = APIConfig.URL + ':' + APIConfig.PORT + '/kalender';
    

    //private addNutzerUrl = 'api/nutzer';
    // private addNutzerUrl = '../nutzer';
    private readonly addNutzerUrl = APIConfig.URL + ':' + APIConfig.PORT + '/addNutzer';

    httpOptions = { headers: new HttpHeaders({'Content-Type': 'application/json'}) }; 

    getZiele(): Observable<Ziel[]> {
        return this.http.get<Ziel[]>(this.zielUrl)
    }

    getTodos(): Observable<Todo[]> {
        return this.http.get<Todo[]>(this.todoUrl)
    }

    getErinnerungen(): Observable<Erinnerung[]> {
        return this.http.get<Erinnerung[]>(this.erinnerungUrl)
    }

    getGalerien(): Observable<Galerie[]> {
        return this.http.get<Galerie[]>(this.galerieUrl)
    }

    getMotivationen(): Observable<Motivation[]> {
        return this.http.get<Motivation[]>(this.motivationUrl)
    }

    getNutzerListe(): Observable<Nutzer[]> {
        return this.http.get<Nutzer[]>(this.nutzerUrl)
    }

    getTagebuch(): Observable<Tagebuch[]> {
        return this.http.get<Tagebuch[]>(this.tagebuchUrl)
    }

    getKalender(): Observable<Kalender[]> {
        return this.http.get<Kalender[]>(this.kalenderUrl)
    }


    // addNutzer(newNutzer: Nutzer): Observable<Nutzer> {
    //     //return this.http.post(this.nutzerUrl, newNutzer, this.httpOptions)
    //     return this.http.post<Nutzer>(this.addNutzerUrl, newNutzer, this.httpOptions)
    // }

    addNutzer(newNutzer: Nutzer): Observable<Nutzer> {
        console.log('in service add services');
        console.dir(newNutzer);
        console.log(newNutzer.Nutzername);
        return this.http.post<Nutzer>(this.nutzerUrl, 
            {
                "NutzerID": newNutzer.NutzerID, 
                "Nutzername": newNutzer.Nutzername, 
                "GanzerName": newNutzer.GanzerName, 
                "Email": newNutzer.Email, 
                "Passwort": newNutzer.Passwort
            }, this.httpOptions)
    }


    deleteZielEintrag (zielEintrag: Eintrag): Observable<Eintrag> {
        const EintragID = typeof zielEintrag === 'number' ? zielEintrag : zielEintrag.EintragID; 
        const url = this.zielUrl +"Delete/"+ EintragID;
        console.log(EintragID);
        console.log(url);
        return this.http.delete<Eintrag>(url, this.httpOptions);
        
    }

    deleteKalenderEintrag (kalenderEintrag: Eintrag): Observable<Eintrag> {
        const EintragID = typeof kalenderEintrag === 'number' ? kalenderEintrag : kalenderEintrag.EintragID; 
        const url = this.kalenderUrl +"Delete/"+ EintragID;
        console.log(EintragID);
        console.log(url);
        return this.http.delete<Eintrag>(url, this.httpOptions); 
    }

    deleteTagebuchEintrag (tagebuchEintrag: Eintrag): Observable<Eintrag> {
        const EintragID = typeof tagebuchEintrag === 'number' ? tagebuchEintrag : tagebuchEintrag.EintragID; 
        const url = this.tagebuchUrl +"Delete/"+ EintragID;
        console.log(EintragID);
        console.log(url);
        return this.http.delete<Eintrag>(url, this.httpOptions); 
    }

    deleteToDoEintrag (todoEintrag: Eintrag): Observable<Eintrag> {
        const EintragID = typeof todoEintrag === 'number' ? todoEintrag : todoEintrag.EintragID; 
        const url = this.todoUrl +"Delete/"+ EintragID;
        console.log(EintragID);
        console.log(url);
        return this.http.delete<Eintrag>(url, this.httpOptions); 
    }
   
}