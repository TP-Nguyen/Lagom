import { APIConfig } from '../APIconfig';
import { HttpClient , HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { Eintrag } from '../model/eintrag';
import { Ziel } from '../model/ziel';


@Injectable({
  providedIn: 'root'
})

export class MainService {
    constructor(private http: HttpClient) {}

    private readonly zielUrl = APIConfig.URL + ':' + APIConfig.PORT + '/ziel';

    getZiele(): Observable<Ziel[]> {
        return this.http.get<Ziel[]>(this.zielUrl)
    }

    // Make the HTTP request:
    //  this.http.get('http://localhost:port/assets/data.json')
            // .subscribe(data => console.log(data));
}