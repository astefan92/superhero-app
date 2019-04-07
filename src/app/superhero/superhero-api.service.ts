import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Superhero } from '../shared/models/superhero.model';
import md5 from 'md5';

@Injectable()
export class SuperheroApiService {

    private apiPublicKey = '065133d434c1a98a9e13374798411f14';
    private apiPrivateKey = 'replace_me';
    private baseUrl = 'https://gateway.marvel.com:443/v1/public/';

    private superheroesSubject: BehaviorSubject<Superhero[]>;

    public superheroes: Observable<Superhero[]>;

    constructor(private http: HttpClient) {
        this.superheroesSubject = new BehaviorSubject<Superhero[]>([]);

        this.superheroes = this.superheroesSubject.asObservable();
    }

    public getSuperheroes() {
        return this.http.get<any>(`${this.baseUrl}/characters?ts=1&limit=15&apikey=${this.apiPublicKey}&hash=${this.getApiHash()}`)
            .pipe(map(response => {
                this.superheroesSubject.next(response.data.results as Superhero[]);
                return response;
            }));
    }

    public getSuperhero(id: number) {
        const superhero = this.superheroesSubject.value.find((sup) => sup.id === id);

        return superhero;
    }

    private getApiHash() {
        return md5(1 + this.apiPrivateKey + this.apiPublicKey);
    }
}
