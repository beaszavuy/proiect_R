import {Injectable} from '@angular/core';

import {HttpClient} from "@angular/common/http";

import {Discipline} from "./discipline.model";

import {Observable} from "rxjs";
import {map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class DisciplineService {
  private disciplinesUrl = 'http://localhost:8080/api/disciplines';

  constructor(private httpClient: HttpClient) {
  }

  getDisciplines(): Observable<Discipline[]> {
    return this.httpClient
      .get<Array<Discipline>>(this.disciplinesUrl);
  }

  getDiscipline(id: number): Observable<Discipline | undefined> {
    return this.getDisciplines()
      .pipe(
        map(disciplines => disciplines.find(discipline => discipline.id === id))
      );
  }

  saveDiscipline(discipline: Discipline): Observable<Discipline> {
    return this.httpClient
      .post<Discipline>(this.disciplinesUrl, discipline);
  }

  deleteDiscipline(id: number): Observable<any> {
    const url = `${this.disciplinesUrl}/${id}`;
    return this.httpClient
      .delete(url);
  }

  // update(discipline: Discipline): Observable<Discipline> {
  //   const url = `${this.disciplinesUrl}/${discipline.id}`;
  //   return this.httpClient
  //     .put<Discipline>(url, discipline);
  // }

}
