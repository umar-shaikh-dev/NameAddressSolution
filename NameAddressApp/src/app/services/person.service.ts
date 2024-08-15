import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Person {
  name: string;
  address: string;
}

@Injectable({
  providedIn: 'root'
})
export class PersonService {
  private apiUrl = 'https://localhost:4100/api/person';

  constructor(private http: HttpClient) { }

  savePerson(person: Person): Observable<Person> {
    return this.http.post<Person>(this.apiUrl, person);
  }
}
