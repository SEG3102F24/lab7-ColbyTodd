import {inject, Injectable} from '@angular/core';
import {Author} from '../model/author';
import { HttpClient, HttpParams } from "@angular/common/http";
import {Observable} from "rxjs";

const Url = 'http://localhost:8080/authors-api/';

@Injectable({
  providedIn: 'root'
})
export class AuthorsService {
  private http: HttpClient = inject(HttpClient);

  public getAuthor(id: string): Observable<Author> {
    return this.http.get<Author>(Url + 'authors/' + id);
  }
}
