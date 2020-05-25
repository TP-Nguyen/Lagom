import { APIConfig } from '../APIconfig';
import { HttpClient , HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { Eintrag } from '../model/eintrag';
import { Ziel } from '../model/ziel';
import { Todo } from '../model/todo';


@Injectable({
  providedIn: 'root'
})

export class MainService {
    constructor(private http: HttpClient) {}

    private readonly zielUrl = APIConfig.URL + ':' + APIConfig.PORT + '/ziel';
    private readonly todoUrl = APIConfig.URL + ':' + APIConfig.PORT + '/todo';

    getZiele(): Observable<Ziel[]> {
        return this.http.get<Ziel[]>(this.zielUrl)
    }

    getTodos(): Observable<Todo[]> {
        return this.http.get<Todo[]>(this.todoUrl)
    }


    // Make the HTTP request:
    //  this.http.get('http://localhost:port/assets/data.json')
            // .subscribe(data => console.log(data));
}