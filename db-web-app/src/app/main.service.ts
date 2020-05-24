import { APIConfig } from './APIconfig';
import { HttpClient , HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { Eintrag } from './eintrag';


@Injectable({
  providedIn: 'root'
})

export class MainService {
    constructor(private http: HttpClient) {}

    private readonly EintragUrl = APIConfig.URL + ':' + APIConfig.PORT + '/main';

    getEintrag(): Observable<Eintrag[]> {
        return this.http.get<Eintrag[]>(this.EintragUrl)
    }

    // getBestenliste(): Observable<Bester[]> {
    //     return this.http.get<Bester[]>(this.bestenlisteUrl)
    // }
    // private readonly bestenlisteUrl = APIConfig.URL + ':' + APIConfig.PORT + '/bestenliste';
    // private readonly aeltesterUrl = APIConfig.URL + ':' + APIConfig.PORT + '/aeltester';
    // getAeltester(): Observable<Buerger[]> {
    //   return this.http.get<Buerger[]>(this.aeltesterUrl)
    // }

   
    // Make the HTTP request:
  //  this.http.get('http://localhost:port/assets/data.json')
    //         .subscribe(data => console.log(data));
}