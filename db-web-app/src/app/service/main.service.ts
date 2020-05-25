import { APIConfig } from '../APIconfig';
import { HttpClient , HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { Eintrag } from '../model/eintrag';


@Injectable({
  providedIn: 'root'
})

export class MainService {
    constructor(private http: HttpClient) {}

    private readonly eintragUrl = APIConfig.URL + ':' + APIConfig.PORT + '/eintrag';

    getEintraege(): Observable<Eintrag[]> {
        return this.http.get<Eintrag[]>(this.eintragUrl)
    }

    // Make the HTTP request:
    //  this.http.get('http://localhost:port/assets/data.json')
            // .subscribe(data => console.log(data));
}